import React, { Fragment } from 'react'
import '../App.css'
import SliderLeft from '../Components/SliderLeft/SliderLeft'
import History from '../Components/Main/History'
import { useDispatch, useSelector } from 'react-redux'
const AppHistory = () => {
    const dispatch = useDispatch();
    const {historyStore,optionStore,reducerStore} = useSelector(state => state)
    return (
        <div className='App'>
            {<SliderLeft 
                reducerStore = {reducerStore}
            />}
            {<History 
                dispatch = {dispatch}
                historyStore = {historyStore}
                optionStore = {optionStore}
            />}
        </div>
    )
}

export default AppHistory