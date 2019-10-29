import React, { useState } from 'react'

const Form = (props) => {
    const [selectedLocation, setSelectedLocation] = useState('')
    const [category, setCategory] = useState('')
    //const [price, setPrice] = useState('')

    const onSelectedLocationChange = event => {
        setSelectedLocation(event.target.value)
    }

    const onCategoryChange = event => {
        setCategory(event.target.value)
    }

    const onFormSubmit = event => {
        event.preventDefault()
        props.onSearch(selectedLocation, category)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset>
                <label>
                    Pick a location to use:
                    <input
                        onChange={onSelectedLocationChange}
                        type="text"
                        value={selectedLocation}
                        aria-label="Location"
                        placeholder="e.g. New Orleans, LA"
                    />
                </label>

                <p>Or...</p>

                <label>
                    Use current location:
                    <input
                        type="checkbox"
                    // isChecked="false"
                    // value={false}
                    />
                </label>

                <label>
                    Pick a search term or food category!
                    <input
                        onChange={onCategoryChange}
                        type="text"
                        value={category}
                        aria-label="What would you like to eat?"
                        placeholder="What would you like to eat?"
                    />
                </label>
            </fieldset>

            <button>Submit</button>
        </form>
    )
}

export default Form