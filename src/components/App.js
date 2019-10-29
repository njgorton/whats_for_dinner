import React, { useState, useEffect } from 'react'
import GlobalStyle from '../theme/globalStyle'
import yelp from '../apis/yelp'
import Header from './Header'
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
        // Store category values from response data, into an array:
        let foundCategories = []
        for (let i = 0; i < response.data.businesses.length; i++) {
            foundCategories.push(response.data.businesses[i].categories[0].title)
        }
        // Remove repeated categories and store:
        const sortCategories = new Set(foundCategories)
        const categories = [...sortCategories]
        console.log(categories)
    }

    return (
        <>
            <GlobalStyle />
            <Header />
            <Form onSearch={onSearch} location={location} />
            <RestaurantList restaurants={restaurants} />
        </>
    )
}

export default App



// import React, { useState, useEffect } from 'react'
// import yelp from '../apis/yelp'
// import useLocation from '../custom-hooks/useLocation'
// import RestaurantList from './RestaurantList'

// const App = () => {
//     //const [geoLocation, geoErr] = useLocation()
//     //const [location, setLocation] = useState(geoLocation)
//     const [lat, long, geoErr] = useLocation()
//     const [errMsg, setErrMsg] = useState(null)
//     const [restaurants, setRestaurants] = useState([])

//     useEffect(() => {
//         if (geoErr) {
//             console.log('this is a stupid error:')
//             console.log(geoErr)
//             setErrMsg(geoErr)
//         } else {
//             onSearch(lat, long, '')
//         }
//     }, [])

//     const onSearch = async (lat, long, term) => {
//         try {
//             const response = await yelp.get('/search', {
//                 params: {
//                     //location: location,
//                     latitude: lat,
//                     longitude: long,
//                     term: `restaurants ${term}`
//                 }
//             })
//             setRestaurants(response.data.businesses)
//             console.log(response.data.businesses)
//         }
//         catch (error) {
//             setErrMsg(error)
//             console.log(errMsg)
//         }
//     }

//     let content
//     if (errMsg) {
//         content = <h1 style={{ color: 'yellow', background: 'red' }}>Error!!! see console...</h1>
//     } else if (lat && long) {
//         content = <RestaurantList restaurants={restaurants} />
//     } else {
//         content = <h1>Please accept location request!</h1>
//     }

//     return (
//         <div>
//             <h1>What's For Dinner?</h1>
//             {content}
//         </div>
//     )
// }

// export default App