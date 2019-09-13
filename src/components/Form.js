import React, { useState } from 'react'

const Form = (props) => {
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')

    const onLocationChange = event => {
        setLocation(event.target.value)
    }

    const onCategoryChange = event => {
        setCategory(event.target.value)
    }

    const onFormSubmit = event => {
        event.preventDefault()
        props.onSearch(location, category)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset>
                <input
                    onChange={onLocationChange}
                    type="text"
                    value={location}
                    aria-label="Enter Your Location"
                    placeholder="Enter Your Location..."
                />

                <input
                    onChange={onCategoryChange}
                    type="text"
                    value={category}
                    aria-label="What would you like to eat?"
                    placeholder="What would you like to eat?"
                />
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form