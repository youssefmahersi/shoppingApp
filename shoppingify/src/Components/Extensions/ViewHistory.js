import React, { Fragment } from 'react'
import { UilArrowLeft } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'

const ViewHistory = ({setNextPage,id,historyStore,optionStore}) => {

    const showData = () => {
        return historyStore.History.map(item => {
            return item._id === id ? (
                <Fragment key={item._id}>
                    <div className='header'>
                        <h1>{item.name}</h1>
                        <div className='time'>
                            <span>{<UilCalendarAlt color='#C1C1C4' width='18px' height='20px'/>}</span>
                            <span>{item.date}</span>
                        </div>
                    </div>
                    <div className='content'>
                        {item.select.map(select => {
                            return select.category.map(category => {
                                return(
                                    <div className='element' key={category}>
                                        <h1>{category}</h1>
                                        <div className='details'>
                                            {select.option ? (
                                                select.option.map(idOption => {
                                                    return optionStore.Options.map(option => {
                                                        return option.category ? (
                                                            option.category.Type === category ? (
                                                                    option._id === idOption ? (
                                                                        <div className='flex' key={select.option}>
                                                                            <h1>{option.name}</h1>
                                                                            <span>3 pcs</span>
                                                                        </div>
                                                                    ) : (null)
                                                            ) : (null)
                                                        ) : (null)
                                                    })
                                            })
                                            ) : (null)}
                                        </div>
                                    </div>
                                )
                            })
                        })}
                    </div>
                </Fragment>
            ) : (null)
        })
    }

    return (
        <Fragment>
            <div className='viewHistory history'>
                <div className='back' onClick={() => setNextPage(false)}>
                    <span>{<UilArrowLeft />}</span>
                    <span>back</span>
                </div>
                {showData()}
            </div>
        </Fragment>
    )
}

export default ViewHistory