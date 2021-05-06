import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import './Travel.css'

const SecurityHeaderComponent = () => {
    return (
        <div className='travel-wrapper'>
            <p>Fashion For Men</p>
            <div className='travel'>
                <input placeholder="Search for..."/>
                <span className="Travel-Search"><BiSearchAlt className='travel-search'/></span>
                <h3 className="view-text">View All</h3>
                
            </div>
        </div>
    )
}

export default SecurityHeaderComponent
