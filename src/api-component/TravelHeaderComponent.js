import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import './Travel.css'

const TravelHeaderComponent = () => {
    return (
        <div className='travel-wrapper'>
            <p>Travel & Tours</p>
            <div className='travel'>
                <input placeholder="Search for..."/>
                <span className="Travel-Search"><BiSearchAlt className='travel-search'/></span>
                <h3 className="view-text">View All</h3>
                
            </div>
        </div>
    )
}

export default TravelHeaderComponent
