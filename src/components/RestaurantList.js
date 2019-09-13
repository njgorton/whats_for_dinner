import React from 'react'
import RestaurantItem from './RestaurantItem'

const RestaurantList = ({ restaurants }) => {
    const renderedList = restaurants.map(restaurant => {
        return (
            <RestaurantItem
                key={restaurant.id}
                restaurant={restaurant}
            />
        )
    })

    return (
        <div>{renderedList}</div>
    )
}

export default RestaurantList