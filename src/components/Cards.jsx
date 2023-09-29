import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {

    const Card_data = [
        { id: 1, image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600', text: 'Explore hindi mountains', label: 'Adventure' },
        { id: 3, image: 'https://images.pexels.com/photos/2105834/pexels-photo-2105834.jpeg?auto=compress&cs=tinysrgb&w=1600', text: 'Explore mediterranean sea', label: 'Adventure' },
        { id: 4, image: 'https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg?auto=compress&cs=tinysrgb&w=1600', text: 'Explore brazilian paradise', label: 'Culture' },
    ]

    const Card_data_1 = [
        { id: 5, image: 'https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?auto=compress&cs=tinysrgb&w=1600', text: 'Try out new food', label: 'Luxury' },
        { id: 6, image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', text: 'Explore japanese culture', label: 'Culture' },
        { id: 7, image: 'https://images.pexels.com/photos/16364253/pexels-photo-16364253/free-photo-of-bateria-percussao-tambores-instrumento.jpeg?auto=compress&cs=tinysrgb&w=1600', text: 'Explore musical tradition', label: 'Culture' }
    ]

    return (
        <div className='cards'>
            <h1>Check Out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://images.pexels.com/photos/2406395/pexels-photo-2406395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='https://images.pexels.com/photos/3671510/pexels-photo-3671510.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        {Card_data.map((card) =>
                            <CardItem
                                src={card.image}
                                text={card.text}
                                label={card.label}
                                path='/services'
                            />)
                        }
                    </ul>
                    <ul className='cards__items'>
                        {Card_data_1.map((card) =>
                            <CardItem
                                src={card.image}
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