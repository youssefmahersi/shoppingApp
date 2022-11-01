import React, { Fragment, useState } from 'react'
import source from './images/source.svg'
import shoppingImg from './images/undraw_shopping_app_flsj.svg'
import { UilPen } from '@iconscout/react-unicons'
import AddNewItems from '../Extensions/AddNewItems'
import { UilPlus } from '@iconscout/react-unicons'
import { UilMinus } from '@iconscout/react-unicons'
import { UilTrashAlt } from '@iconscout/react-unicons'
import { postHistory } from '../../Store/shopping/History'
import { deleteSelect, Checkbox } from '../../Store/shopping/Reducers'

const SliderRight = (props) => {
    const {
        dispatch,
        showShoppingItems,
        sectionStore,
        optionStore,
        reducerStore
    } = props

    const [nextPageNewItem,setNextPageNewItem] = useState(false)
    const [shopping,setShopping] = useState(false)
    const [name,setName] = useState()
    const [nameError,setNameError] = useState(false)
    const [pay,setPay] = useState(false)

    const EnterDataInHistory = (e) => {
        const data = {
                select: [
                    {
                        category: reducerStore.SaveCategory,
                        option: reducerStore.Selected,
                    }
                ],
                name: name.target.value,
                activity: e
        }
        dispatch(postHistory(data))
        window.location = '/History'
    }
    const checkInputIsEmpty = () => {
        if(!name){
            setNameError(true)
        }else{
            setPay(true)
        }
    }

    const showList = (category) => {
        return reducerStore.Selected ? (
            reducerStore.Selected.map(item => {
                return optionStore.Options.map(option => {
                    return item == option._id ? (
                        option.category.Type === category ? (
                            <div className='details' key={item}>
                                <div className={shopping ? 'divCheckbox' : 'hide'}>
                                    <div className='checkbox'>
                                        <input type='checkBox' onClick={(e) => getDataCheckbox({value: e.target.checked, option})}/>
                                    </div>
                                    <h1>{option.name.charAt(0).toUpperCase() + option.name.slice(1)}</h1>
                                </div>
                                <h1 className={shopping ? ('hide') : ('')}>{option.name.charAt(0).toUpperCase() + option.name.slice(1)}</h1>
                                <div className='pcs'>
                                    <span className='count'>{option.pcs} pcs</span>
                                    <div className='hover'>
                                        <span onClick={() => dispatch(deleteSelect(item))}>{<UilTrashAlt />}</span>
                                        <span>{<UilMinus color='#F9A109'/>}</span>
                                        <span>{option.pcs} pcs</span>
                                        <span>{<UilPlus color='#F9A109'/>}</span>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    ) : (null)
                })
            })
        ) : (null)
    }
    
    const [checkBoxData,setCheckBoxData] = useState([])
    const getDataCheckbox = (e) => {
        if(e.value){
            setCheckBoxData([...checkBoxData, e.option._id])
        }else{
            const filter = checkBoxData.filter(fl => fl !== e.option._id)
            setCheckBoxData(filter)
        }
    }
    const removeSelectedData = (e) => {
        e.preventDefault();
        dispatch(Checkbox(checkBoxData))
        setShopping(false)
        setCheckBoxData([])
    }

    return (
        <Fragment>
            {showShoppingItems ? (
                nextPageNewItem ? (<Fragment>
                {<AddNewItems 
                    setNextPageNewItem = {setNextPageNewItem}
                    sectionStore = {sectionStore}
                    dispatch = {dispatch}
                />}
            </Fragment>) : (
                <div className='sliderRight'>
                    <div className='addItem'>
                        <div className='image'>
                            <img src={source}/>
                        </div>
                        <div className='add'>
                            <h1>Didn’t find what you need?</h1>
                            <button onClick={() => setNextPageNewItem(true)}>Add item</button>
                        </div>
                    </div>
                    <div className='shoppingList'>
                        <h1>Shopping list</h1>
                        <span onClick={() => setShopping(!shopping)}>{<UilPen />}</span>
                    </div>
                    <div className='lists'>
                        {reducerStore.Selected.length ? (
                            <Fragment>
                                <div className='list'>
                                    <h1>{reducerStore.Selected ? 'Meat and Fish' : null}</h1>
                                    {showList('Meat and Fish')}
                                </div>
                                <div className='list'>
                                    <h1>{reducerStore.Selected ? 'Beverages' : null}</h1>
                                    {showList('Beverages')}
                                </div>
                                <div className='list'>
                                    <h1>{reducerStore.Selected ? 'Pets' : null}</h1>
                                    {showList('Pets')}
                                </div>
                                <div className='list'>
                                    <h1>{reducerStore.Selected ? 'Fruit and vegetables' : null}</h1>
                                    {showList('Fruit and vegetables')}
                                </div>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <div className='noItems'>
                                    <h1>No items</h1>
                                    <img src={shoppingImg}/>
                                </div>
                                
                            </Fragment>
                        )}
                    </div>
                    {shopping ? (
                        <div className='Tt'>
                            <div className='edit'>
                                <button onClick={removeSelectedData}>Complete</button>
                                <button onClick={() => setShopping(false)}>cancel</button>
                            </div>
                        </div>
                    ) : (
                        pay ? (
                            <div className='Tt'>
                                <div className='pay edit'>
                                    <button onClick={() => EnterDataInHistory('completed')}>Pay now</button>
                                    <button onClick={() => EnterDataInHistory('cancelled')}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <div className='Tt'>
                                <div className={nameError ? 'errorSave save' : 'save'}>
                                    <input onChange={setName} type='text' placeholder='Enter a name'/>
                                    <button className={nameError ? 'errorButton' : ''} onClick={checkInputIsEmpty}>Save</button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            )
            ) : (null)}
        </Fragment>
    )
}

export default SliderRight