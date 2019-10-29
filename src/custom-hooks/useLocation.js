import { useState, useEffect } from 'react'

export default () => {
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [geoErr, setGeoErr] = useState(null)

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            },
            error => setGeoErr(error.description)
        )
    }, [lat, long, geoErr])

    return [lat, long, geoErr]
}