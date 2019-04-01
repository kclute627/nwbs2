import React from 'react';







const card = (props)=> {

    return (
        <div className="homepage__bottom-card">
            <div className="homepage__bottom-card-image-1">
                <img src={props.img} alt="people" />

            </div>
            <h1 className = "homepage__bottom-card-heading">
                {props.heading}
            </h1>
            <p>{props.text}</p>
            <button>More Information</button>
        </div>
    )
}


export default card;