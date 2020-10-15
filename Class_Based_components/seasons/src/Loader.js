import React from 'react'

export default function Loader(props) {
    return (
        
        <div class="ui active dimmer">
            <div class="ui text loader">{props.message || "Loading..."}</div>
        </div>
    
    
    
    )
}
