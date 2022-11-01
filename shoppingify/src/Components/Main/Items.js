import React, { Fragment, useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { Select , saveHistory } from '../../Store/shopping/Reducers'
import { isLoading, errorMessage } from '../Extensions/React'
import { SearchBox } from '../../Store/shopping/Options'

const Items = ({dispatch,sectionStore,optionStore}) => {
    const [search,setSearch] = useState()
    const searchHandler = (e) => {
        setSearch(e)
        if(search){
            dispatch(SearchBox(e.toLowerCase()))
        }
    }
    const saveHandler = (e) => {
        dispatch(Select(e))
        dispatch(saveHistory(e))
    }
    const showSections = () => {
        return sectionStore.Sections ? (
            sectionStore.Sections.map(section => {
                return(
                    <div className='item' key={section._id}>
                        <h1>{section.Type}</h1>
                            {optionStore.Options.map(option => {
                                return option.category ? (
                                    option.category._id === section._id ? (
                                        <div className='content' key={option._id}>
                                            <div className='colome' onClick={() => saveHandler(option)}>
                                                <div className='flex'>
                                                    <span>{option.name.charAt(0).toUpperCase() + option.name.slice(1)}</span>
                                                    <span>{<UilPlus size='18px' color='#C1C1C4'/>}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (null)
                                ) : (null)
                            })}
                    </div>
                )
            })
        ) : (null)
    }

    return (
        <div className='items'>
            {sectionStore.isLoading ? (isLoading()) : (optionStore.isLoading ? (isLoading()) : (
                <Fragment>
                    <div className='header'>
                        <h1><span>Shoppingify</span> allows you take your shopping list wherever you go</h1>
                        <div className='search'>
                            <span>{<UilSearch size='19px'/>}</span>
                            <input onChange={(e) => searchHandler(e.target.value)} type='search' placeholder='search item'/>
                                {search ? (
                                    <div className='itemSearch'>
                                        <ul>
                                            {optionStore.isError ? (null) : (optionStore.Search.map(option => {
                                                return(
                                                    <li key={option._id} onClick={() => saveHandler(option)}>{option.name.charAt(0).toUpperCase() + option.name.slice(1)}</li>
                                                )
                                            }))}
                                        </ul>
                                    </div>
                                ) : (null)}
                        </div>
                    </div>
                    {sectionStore.isError ? (errorMessage()) : (optionStore.isError ? (errorMessage()) : (
                        <div className='items'>
                            {showSections()}
                        </div>
                    ))}
                </Fragment>
            ))}
        </div>
    )
}

export default Items