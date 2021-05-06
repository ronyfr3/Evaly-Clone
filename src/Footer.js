import React,{useState,useEffect} from 'react'
import {FiShoppingBag, FiMessageSquare} from 'react-icons/fi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FcBusinessman} from 'react-icons/fc'
import BackToTopBtn from './BackToTop'
import {Link} from 'react-router-dom'
import './Footer.css'

import { connect } from "react-redux";

const Footer = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

    return (
        <div className="footer">
            <div>
            <Link to='/cart'>
            <span className="cartcount">{cartCount}</span>
                <span className='footer-logos'><FiShoppingBag/></span>
                  <p>Cart</p>
                </Link>
            </div>
            <div>
                <span className='footer-logos1'><FiMessageSquare/></span>
                <p>Message</p>
            </div>
               <BackToTopBtn/>
            <div>
                <span className='footer-logos2'><IoMdNotificationsOutline/></span>
                <p>Notification</p>
            </div>
            <div>
                <span className='footer-logos3'><FcBusinessman/></span>
                <p>Account</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(Footer);