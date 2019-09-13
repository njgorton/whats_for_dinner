import React, { useState, useEffect } from 'react'
import yelp from '../apis/yelp'
import Form from './Form'
import RestaurantList from './RestaurantList'

const App = () => {
    const [location, setLocation] = useState('Titusville, FL')
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        onSearch(location, 'restaurants')
    }, [location])

    const onSearch = async (location, term) => {
        const response = await yelp.get('/search', {
            params: {
                location: location,
                term: `restaurants ${term}`
            }
        })

        setLocation(location)
        setRestaurants(response.data.businesses)
        console.log(response.data.businesses)
    }

    return (
        <div>
            <h1>What's For Dinner?</h1>
            <Form onSearch={onSearch} />
            <RestaurantList restaurants={restaurants} />
        </div>
    )
}

export default App