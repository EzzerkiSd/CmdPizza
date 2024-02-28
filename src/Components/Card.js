import React from 'react';
import { Button } from './Button';
import './Card.css';

export const Card = ({
    imgSrc,
    title,
    text,
    price
}) => {
    return(
        <div className="card">
            <div className="img">
                <img src={imgSrc} alt="" draggable={false} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <h1>{price}</h1>
            <Button children={'Add to Crate'} />
        </div>
    )
}