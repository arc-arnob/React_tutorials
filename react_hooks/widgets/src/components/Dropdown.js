import React,{useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()
    const onBodyClick = (event) =>{
        if(ref.current.contains(event.target)){
            return
        }
        setOpen(false)
    }
    useEffect(() =>{
        document.body.addEventListener('click',onBodyClick)
            
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])
    const renderedOptions = options.map((option) => {
        if (option.content === selected.content){
            return null;
        }
        return(
            <div 
                key={options.content} 
                className='item'
                onClick={()=> onSelectedChange(option)}
                >
            {option.content}

            </div>
        )
    })
    console.log(ref.current)
    return (
        <div className='ui form' ref={ref}>
            <div className='field'>
                <label className='label'>Select a Color</label>
                <div 
                onClick={()=>setOpen(!open)}
                className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.title}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>{renderedOptions}</div>
                </div>
            </div>
            
        </div>
    )
}
export default Dropdown;