import React,{useState} from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'

const items = [{
    title:"Why React?",
    content:"Its Simple"
},
{
    title:"What is React?",
    content:"Framework"
},
{
    title:"Who uses React?",
    content:"Engineer"
}]



const options = [{
    title:"This is color red",
    content:"Red"
},
{
    title:"This is color green",
    content:"Green"
},
{
    title:"This is color Blue",
    content:"Blue"
}]
const App = () => {
    
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)
    return (
        <div>
        <button onClick={() => setShowDropdown(!showDropdown)}> Toggle Dropdown </button>
        {showDropdown ? (<Dropdown 
            options={options}
            selected = {selected}
            onSelectedChange = {setSelected}
        />) : null}
        //<Accordion items={items}/>,
        //<Search />
        </div>
    )
}

export default App
