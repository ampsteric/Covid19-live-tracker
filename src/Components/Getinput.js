import React from 'react'

export default function Getinput(props) {
    return (
        <div className="inp">
           <span>Country Name:</span> <input type="text"  onChange={props.handle}/>
        </div>
    )
}
