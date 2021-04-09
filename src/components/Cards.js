import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div>
            <h1>Check out these cute pups!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
