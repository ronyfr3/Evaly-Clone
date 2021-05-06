import React from "react";
import {Link} from 'react-scroll'
import './Footer.css'

const BackToTopBtn = () => {
    return (
        <Link 
            activeClass="active" 
            to="goToTop"
            spy={true}
            smooth={true}
        >
         <div className="evaly-logo">
               <img src="https://evaly.com.bd/static/images/icon_b&w.svg" alt="logo"/>
         </div>
    </Link>
    )
}
export default BackToTopBtn
