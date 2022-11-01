import React from 'react'
import '../App.css'
import SliderLeft from '../Components/SliderLeft/SliderLeft'
import Statistics from '../Components/Main/Statistics'
import { useSelector } from 'react-redux'

const AppStatistics = () => {
    const {reducerStore} = useSelector(state => state)
    return (
        <div className='App'>
            {<SliderLeft 
                reducerStore = {reducerStore}
            />}
            {<Statistics />}
        </div>
    )
}

export default AppStatistics