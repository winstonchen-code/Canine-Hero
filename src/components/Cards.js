import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div>
            <div className='cards'>
                <h1>FEATURED PETS</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                            src="img/Dog1.jpeg"
                            text="Snorkel with sea turtles in the beautiful clear waters of Maunalua Bay"
                            label='Rosie'
                            path='/locations/34'
                            />
                            <CardItem 
                            src="images/img-3.jpg"
                            text="Cuddle with Molly, Toph, and a few chickens at Dane's Farm"
                            label='Archie'
                            path='/locations/44'
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem 
                            src="images/img-5.jpg"
                            text="Terrier, American Staffordshire / Mix"
                            label='Luna'
                            path='/locations/46'
                            />
                            <CardItem 
                            src="images/img-2.jpg"
                            text="Experience Tokyo's unlimited choice of shopping, entertainment, culture, and dining"
                            label='Robo'
                            path='/locations/43'
                            />
                            <CardItem 
                            src="images/img-4.jpg"
                            text="Take a stroll through the Nation's Capital on the Fourth of July"
                            label='Mya'
                            path='/locations/45'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
