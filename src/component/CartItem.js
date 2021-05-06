import React, { useState } from "react";
import './CartItem.css'
import {BsTrash} from 'react-icons/bs'
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/shopping-actions";


const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="cartItem">
      <img
        src={item.image}
        alt={item.title}
      />
        <p className="cartitemsprice">৳ {item.price}</p>
        <p className="cartitemstitle">{item.title}</p>
        <div className="quantitcarts">
          <label htmlFor="qty">Quantity:</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className=""
        >
          <span className='removecart'>remove from cart</span>
         <BsTrash className='trash'/>
        </button>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
