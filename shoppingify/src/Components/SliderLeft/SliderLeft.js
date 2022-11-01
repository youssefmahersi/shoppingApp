import React from 'react'
import logo from './images/logo.svg'
import { UilListUl } from '@iconscout/react-unicons'
import { UilHistory } from '@iconscout/react-unicons'
import { UilAnalytics } from '@iconscout/react-unicons'
import { UilShoppingCart } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'

const SliderLeft = (props) => {
    const {
        setShowShoppingItems,
        showShoppingItems,
        reducerStore
    } = props

    const checkInPath = () => {
        if(window.location.pathname === '/Home'){
            setShowShoppingItems(!showShoppingItems)
        }
    }

    return (
        <div className='sliderLeft'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div className='select'>
                <NavLink to='/Home'>{<UilListUl size='29.5px'/>}</NavLink>
                <NavLink to='/History'>{<UilHistory size='29.5px'/>}</NavLink>
                <NavLink to='/Statistics'>{<UilAnalytics size='29.5px'/>}</NavLink>
            </div>
            <div className='shop' onClick={checkInPath}>
                <span>{<UilShoppingCart size='29.5px' color='#fff'/>}</span>
                <span>{reducerStore.Selected.length}</span>
            </div>
        </div>
    )
}

export default SliderLeft