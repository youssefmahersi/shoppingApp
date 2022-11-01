import React from 'react'
import { UilArrowLeft } from '@iconscout/react-unicons'
import { postOptions } from '../../Store/shopping/Options'

const SaveNewItems = (props) => {
    const {
        dispatch,
        sectionStore,
        setNextPageAddItem,
        section,
        name,
        note,
        image
    } = props

    const insertDataOption = (e) => {
        e.preventDefault();
        return sectionStore.Sections.map(item => {
            const sectionId =  item.Type === section ? item._id : null
            if(sectionId){
                const data = {
                    name,
                    note,
                    image,
                    category: sectionId,
                }
                dispatch(postOptions(data))
                window.location = '/Home'
            }
        })
    }

    return (
        <div className='sliderRight saveNewItems'>
            <div className='back' onClick={() => setNextPageAddItem(false)}>
                <span>{<UilArrowLeft />}</span>
                <span>back</span>
            </div>
            <div className='showImage'>
                <img src={image ? (image) : ('https://media.wired.com/photos/5c9040ee4950d24718d6da99/16:9/w_2400,h_1350,c_limit/shoppingcart-1066110386.jpg')}/>
            </div>
            <form>
                <div className='name'>
                    <label>name</label>
                    <h1>{name}</h1>
                </div>
                <div className='category'>
                    <label>category</label>
                    <h1>{section}</h1>
                </div>
                {note ? (
                    <div className='note'>
                        <label>note</label>
                        <p>{note}</p>
                    </div>
                ) : (null)}
                <div className='button'>
                    <button onClick={() => setNextPageAddItem(false)}>delete</button>
                    <button onClick={insertDataOption}>Add to list</button>
                </div>
            </form>
        </div>
    )
}

export default SaveNewItems