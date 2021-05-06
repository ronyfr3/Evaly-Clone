import React from 'react'
import TravelComponent from './api-component/TravelComponent'
import SecuritySafe from './api-component/SecuritySafe'
import Header from './component/Header'
import SearchBar from './component/SearchBar'
import Slider from './component/slider'
import MediaEvent from './api-component/MediaEvent'
import Women from './api-component/Women'
import Footer from './Footer'

const Evaly = () => {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <Slider/>
            <TravelComponent/>
            <SecuritySafe/>
            <MediaEvent/>
            <Women/>
            <Footer/>
        </div>
    )
}

export default Evaly
