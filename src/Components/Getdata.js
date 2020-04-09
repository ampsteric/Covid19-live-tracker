import React from 'react';

export default function Getdata(props) {
    return (
        <div className="flexi">
    <div className="cases"><h1>cases:</h1>
    <p>{props.conf}</p> 
   </div>

    <div className="recovered"><h1>recovered:</h1>
    <p>{props.recov}</p>
    </div>

    <div className="deaths"><h1>deaths:</h1>
    <p>{props.death}</p>
    </div>

        </div>
    )
}
