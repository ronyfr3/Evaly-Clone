import React from "react";
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import "./SingleItem.css"

import { connect } from "react-redux";
import {addToCart} from '../redux/Shopping/shopping-actions'

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className="singleItem">
             <Link to='/'>
              <div className='backtoshop'>
                Back to shop
              </div>
            </Link>
             <div className='singleitemimg'>
             <p className="singleItemtitle">{current.title}</p>
             <img
                  src={current.image}
                  alt={current.title}
                />
             </div>
             <p className="singleItemprice">৳ {current.price}</p>
            <div className='allbtn'>
            <button
                  onClick={() => addToCart(current.id)}
                  className="singleItembtn"
                >
                  <span className='singleitemspan'><AiOutlineShoppingCart/></span>
                  Add To Cart
              </button>
              <Link to='/cart'>
                <div className='gotocart'>
                <span className='singleitemspan'><FiShoppingCart/></span>
                    go to cart
                </div>
              </Link>
            </div>
  
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
