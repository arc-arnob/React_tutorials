import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

const App = () => {
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

    return (
        <Accordion items={items}/>,
        <Search />
    )
}

export default App
