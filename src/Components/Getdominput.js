import React from 'react'

export default function Getdominput(props) {
    return (
        <div className="inp">
           <span>State Name:</span> <input type="text"  onChange={props.handle}/>
        </div>
    )
}
