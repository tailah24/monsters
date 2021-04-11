import React from 'react'
import './input.css'

export const InputBox = ({placeholder, handleChange}) => {
    return (
        <div>
            <input type ='search' placeholder = { placeholder } 
        onChange = { handleChange }
        className = 'search'
        />
            
        </div>
    )
}
