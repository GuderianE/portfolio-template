import React from "react";

export default function Card({image, name}) {

    return (
        <div className='card'>
            <div className='img-container'>
                <img src={image} alt={image} />
            </div>
            <div className='info-link'>
                <h3>{name}</h3>
                <button>View Project</button>
            </div>
        </div>
    )
}