import React, {useEffect,useState, use} from 'react'
import '../App.css'
import SliderLeft from '../Components/SliderLeft/SliderLeft'
import Items from '../Components/Main/Items'
import SliderRight from '../Components/SliderRight/SliderRight'
import { useSelector, useDispatch } from 'react-redux'
import { getSections } from '../Store/shopping/Sections'
import { getOptions } from '../Store/shopping/Options'

const AppItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSections())
    dispatch(getOptions())
  },[])

  const {sectionStore,optionStore,reducerStore} = useSelector(state => state)
  const [showShoppingItems,setShowShoppingItems] = useState(false)

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  useEffect(() => {
    if(windowDimenion.winWidth < 1253){
      setShowShoppingItems(false)
    }
    if(windowDimenion.winWidth > 1253){
      setShowShoppingItems(true)
    }
  },[windowDimenion])

  return (
    <div className='App'>
      {<SliderLeft 
        setShowShoppingItems = {setShowShoppingItems}
        showShoppingItems = {showShoppingItems}
        reducerStore = {reducerStore}
      />}
      {<Items 
        dispatch = {dispatch}
        sectionStore = {sectionStore}
        optionStore = {optionStore}
      />}
      {<SliderRight
        dispatch = {dispatch}
        showShoppingItems = {showShoppingItems}
        sectionStore = {sectionStore}
        optionStore = {optionStore}
        reducerStore = {reducerStore}
      />}
    </div>
  )
}

export default AppItems