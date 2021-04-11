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
                            src="images/Dog1.jpeg"
                            text="Meet Rosie! Rosie is a beautiful, sweet pit bull. She is now about 2 yrs old, about 65 pounds! She is great with people, but can be picky with her dog friends."
                            label='Rosie'
                            path='/dogs/34'
                            />
                            <CardItem 
                            src="images/Dog2.jpeg"
                            text="Meet Archie! He's 5 years old, a golden retriever, and is about 85 pounds. He may seem shy at first, but he warms up quickly and is a great companion."
                            label='Archie'
                            path='/dogs/44'
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem 
                            src="images/Dog3.jpeg"
                            text="Meet Luna! She is a lovely, friendly, 5 month old, 64 pounds, Husky mix. Luna is full of typical puppy energy, but is very intelligent and trainable, and loves to lay at your feet in between playtimes."
                            label='Luna'
                            path='/dogs/46'
                            />
                            <CardItem 
                            src="images/Dog4.jpeg"
                            text="Meet Robo! He's two years old and a Lab/Cattle mix. This smart boy is house trained and graduated from obedience school with flying colors. He knows his commands, has good recalls and is food motivated."
                            label='Robo'
                            path='/dogs/43'
                            />
                            <CardItem 
                            src="images/Dog5.jpeg"
                            text="Meet Mya! She's an Australian Shepherd mix and weighs about 44 pounds. This shy, sweet girl loves her me time and enjoys spending time in her crate, but when ready for your attention she's happy to spend time with you!"
                            label='Mya'
                            path='/dogs/45'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
