import React from 'react'

const RestaurantItem = ({ restaurant }) => {
    return (
        <div style={{ display: 'flex', margin: '50px' }}>
            <img
                style={{
                    height: '150px',
                    width: '150px'
                }}
                alt={restaurant.name}
                src={restaurant.image_url}
            />
            <div>
                <h2>{restaurant.name}</h2>
                <p>Category: {restaurant.categories[0].title}</p>
                <p>Price: {restaurant.price}</p>
                <p>Rating: {restaurant.rating}</p>
                <p>Reviews: {restaurant.review_count}</p>
            </div>
        </div>
    )
}

export default RestaurantItem