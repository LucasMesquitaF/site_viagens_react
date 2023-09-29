import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {

    const Card_data = [
        { id: 1, image: 'img-1', text: 'Explore hindi mountains', label: 'Adventure' },
        { id: 3, image: 'img-3', text: 'Explore mediterranean sea', label: 'Adventure' },
        { id: 4, image: 'img-4', text: 'Explore brazilian paradise', label: 'Culture' },
    ]

    const Card_data_1 = [
        { id: 5, image: 'img-5', text: 'Try out new food', label: 'Luxury' },
        { id: 6, image: 'img-6', text: 'Explore japanese culture', label: 'Culture' },
        { id: 7, image: 'img-7', text: 'Explore musical tradition', label: 'Culture' }
    ]

    return (
        <div className='cards'>
            <h1>Check Out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        {Card_data.map((card) =>
                            <CardItem
                                src={'images/'+card.image+'.jpg'}
                                text={card.text}
                                label={card.label}
                                path='/services'
                            />)
                        }
                    </ul>
                    <ul className='cards__items'>
                        {Card_data_1.map((card) =>
                            <CardItem
                                src={'images/'+card.image+'.jpg'}
                                text={card.text}
                                label={card.label}
                                path='/services'
                            />)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards