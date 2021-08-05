import React from 'react'
import { useState } from 'react'

const Header = (props) => {
    //hooks for Search bar              
    const [searchedValue, setSearchedValue] = useState('')
    const [searchedTypeValue, setSearchedTypeValue] = useState('')

    // Function that handles the searchValue input
    const handleInput = (e) => {
        e.preventDefault()
        let value = e.target.value
        setSearchedValue(value)
    }
    const handleTypeValue = (e) => {
        e.preventDefault()
        let value = e.target.value
        setSearchedTypeValue(value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        props.fetchMovieInfo(searchedValue, searchedTypeValue)
    }

    return (
        <div>
            <h1>What to watch</h1>
            <div>
                <input
                    type="text"
                    placeholder="title"
                    onChange={handleInput}
                />
                <select
                    id="selection"
                    name="selection"
                    placeholder="Type"
                    onChange={handleTypeValue}
                >
                    <option value="" hidden>Type</option>
                    <option value="movie" >Movies</option>
                    <option value="series" >Series</option>
                    <option value="episode" >Episodes</option>
                </select>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}
export default Header
