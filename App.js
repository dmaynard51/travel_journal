import React from 'react'
import Topbar from './components/Topbar'
import data from './data'
import Card from "./components/Card"

export default function App() {
    const items = data.map(item => {
        console.log(item)
        return (
            <Card 
            item = {item}
            />
        )
    })
    
    return (
        <div>
            <Topbar/>
            <div className='emptyspace'/>
            <div>
                {items}
            </div>
        </div>
        
    )
}