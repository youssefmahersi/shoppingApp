import React, {Fragment, useEffect, useState} from 'react'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import { UilAngleRightB } from '@iconscout/react-unicons'
import ViewHistory from '../Extensions/ViewHistory'
import { getOptions } from '../../Store/shopping/Options'
import { getHistory } from '../../Store/shopping/History'
import { isLoading, errorMessage } from '../Extensions/React'

const History = (props) => {
    const {
        dispatch,
        historyStore,
        optionStore
    } = props
    const [nextPage,setNextPage] = useState(false)
    const [id,setId] = useState()
    useEffect(() => {
        dispatch(getHistory())
        dispatch(getOptions())
    },[])

    const nextHandler = (e) => {
        setId(e)
        setNextPage(true)
    }
    const showHistory = () => {
        return historyStore.History ? (
            historyStore.History.map(item => {
                return(
                    <div className='content' key={item._id} onClick={() => nextHandler(item._id)}>
                        <h1>{item.name}</h1>
                        <div className='icon'>
                            <span>{<UilCalendarAlt color='#C1C1C4' width='18px' height='20px'/>}</span>
                            <span>{item.date}</span>
                            <span className={item.activity === 'completed' ? 'completed' : 'cancelled'}>{item.activity}</span>
                            <span onClick={() => nextHandler(item._id)}>{<UilAngleRightB color='#F9A109'/>}</span>
                        </div>
                    </div>
                )
            })
        ) : (null)
    }
    var dateObj = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <Fragment>
            {historyStore.isLoading ? (isLoading()) : (optionStore.isLoading ? (isLoading()) : (
                <Fragment>
                    {historyStore.isError ? (<div>{errorMessage()}</div>) : (optionStore.isError ? (<div>{errorMessage()}</div>) : (
                        nextPage ? (<ViewHistory 
                        setNextPage = {setNextPage}
                        id = {id}
                        historyStore = {historyStore}
                        optionStore = {optionStore}
                    />) : (
                        <div className='history'>
                            <div className='header'>
                                <h1>Shopping history</h1>
                            </div>
                            <div className='time'>
                                <h1>{monthNames[dateObj.getMonth()] + ' ' + dateObj.getFullYear()}</h1>
                                {showHistory()}
                            </div>
                        </div>
                        )
                    ))}
                </Fragment>
            ))}
        </Fragment>
    )
}

export default History