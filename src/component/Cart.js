import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import {Link} from 'react-router-dom'
import './Cart.css'

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="cart-wrapper">
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cartsummaryitems">
        <h4 className="summary">Cart Summary</h4>
        <div className='hr'></div>
        <div className="cartitemprice">
          <span className='totalspan'>Total Items</span>
          <span className='totalitemscart'>{totalItems} pice</span>
          <span className='totalspan1'>Total Price</span>
          <span className='totalpricecart'>৳ {totalPrice}</span>
        </div>
        <a href='https://acmepayment.com/payment#/payment/payment'>
          Proceed To Checkout
        </a>
        <Link to='/'>Buy More Products</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
