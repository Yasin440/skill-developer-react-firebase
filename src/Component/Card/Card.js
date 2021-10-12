import React from 'react';
import './Card.css';

// ***********home cart component*************//
const Card = (props) => {
    const { name, picture, email, details, duration, price } = props.cource;
    return (

        <div className="col">
            <div className="card h-100">
                <div className="img">
                    <img src={picture} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                    <div className="card-title"><h4 className='fw-bold'>{name}...</h4></div>
                    <p className="card-text">{details.slice(0, 90)}...</p>
                    <p className=
                        'fw-bold'>Fee: ${price}</p>
                    <p className=
                        'fw-bold'>Duration: {duration}</p>
                    <p className="fw-bold">{email}</p>
                </div>
                <div className="card-footer">
                    <button><i className="fas fa-info-circle pe-1"></i>More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Card;