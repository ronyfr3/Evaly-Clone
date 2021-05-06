import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import SideMenuBar from './SideMenuBar'
import "./SearchBar.css"

const SearchBar = () => {
    const [open,setOpen]=useState(false)
   
    const showSideMenu1=()=>{
       setOpen(!open)
    }
    return (
        <div>
            <div className='searchbar'>
                <div className='searchbar-input-section'>
                    <span className='searchbar-fabars' onClick={showSideMenu1}><FaBars/></span>
                    {open && <SideMenuBar showSideMenu1={showSideMenu1} open={open} setOpen={setOpen}/>}
                    <input placeholder="Search for..."/>
                    <div className="searchbar-searchicon"><BiSearchAlt className='search'/></div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
