import React, {Fragment, useState, useRef} from 'react'
import SaveNewItems from './SaveNewItems'

const AddNewItems = ({setNextPageNewItem,sectionStore,dispatch}) => {
    const [nextPageAddItem,setNextPageAddItem] = useState(false)
    const [section,setSection] = useState()
    const [isErrorName,setIsErrorName] = useState(false)
    const [isErrorSection,setIsErrorSection] = useState(false)
    const name = useRef()
    const note = useRef()
    const image = useRef()
    
    const checkData = (e) => {
        e.preventDefault();
        if(!name.current.value){
            setIsErrorName(true)
        }
        if(!section){
            setIsErrorSection(true)
        }
        if(name.current.value){
            setIsErrorName(false)
        }
        if(section){
            setIsErrorSection(false)
        }
        if(name.current.value && section) {
            setNextPageAddItem(true)
        }
    }

    return (
        <Fragment>
            {nextPageAddItem ? (<Fragment>{<SaveNewItems 
                dispatch = {dispatch}
                setNextPageAddItem = {setNextPageAddItem}
                name = {name.current.value}
                note = {note.current.value}
                image = {image.current.value}
                section = {section}
                sectionStore = {sectionStore}
            />}</Fragment>) : (
                <div className='sliderRight addNewItems'>
                    <h1>Add a new item</h1>
                    <form>
                        <div className='name'>
                            <input className={isErrorName ? 'error input' : 'input'} ref={name} id='name' type='text' placeholder='Enter a name'/>
                            <label className={isErrorName ? 'labelError label' : 'label'} htmlFor='name'>Name</label>
                        </div>
                        <div className='note'>
                            <textarea ref={note} id='note' placeholder='Enter a note'></textarea>
                            <label htmlFor='note'>Note (optional)</label>
                        </div>
                        <div className='image'>
                            <input ref={image} id='image' type='text' placeholder='Enter a url'/>
                            <label htmlFor='image'>Image (optional)</label>
                        </div>
                        <div className='category'>
                            <input className={isErrorSection ? 'error input' : 'input'} id='category' value={section} type='search' placeholder='Enter a category'/>
                            <label className={isErrorSection ? 'labelError label' : 'label'} htmlFor='category'>Category</label>
                        </div>
                        <div className={isErrorSection ? 'error select' : 'select'}>
                            <h1 onClick={(e) => setSection(e.target.innerHTML)}>Fruit and vegetables</h1>
                            <h1 onClick={(e) => setSection(e.target.innerHTML)}>Meat and Fish</h1>
                            <h1 onClick={(e) => setSection(e.target.innerHTML)}>Beverages</h1>
                            <h1 onClick={(e) => setSection(e.target.innerHTML)}>Pets</h1>
                        </div>
                        {isErrorSection ? <p style={{textAlign: 'center', color: 'red', marginTop: '.4rem', fontSize: '17px'}}>Please choose from these options</p> : null}
                        <div className='button'>
                            <button onClick={() => setNextPageNewItem(false)}>cancel</button>
                            <button onClick={checkData}>Save</button>
                        </div>
                    </form>
                </div>
            )}
        </Fragment>
    )
}

export default AddNewItems