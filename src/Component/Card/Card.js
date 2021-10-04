import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name , picture, email, details, duration, price } = props.cource;
    return (

        <div className="col">
            <div className="card h-100">
                <div className="img">
                    <img src={picture} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                    <div className="card-title"><h4>{name}</h4></div>
                    <p className="card-text">{details.slice(0, 80)}...</p>
                    <small className=
                    'fw-bold'>Fee: ${price}</small>
                    <p className=
                    'fw-bold'>Duration: {duration}</p>
                    <small className="fw-bold">{email}</small>
                </div>
                <div className="card-footer">
                    <button>More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Card;