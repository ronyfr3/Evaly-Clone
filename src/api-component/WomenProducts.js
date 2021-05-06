import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {loadCurrentItem} from "../redux/Shopping/shopping-actions";
import './TravelProducts.css'

const WomenProducts = ({ products, loadCurrentItem }) => {

    return (
        <div className='product-wrapper'>
          <Link to={`/product/${products.id}`}>
           {
               products.slice(13, 18).map((item)=>{
                const { id,title,price,image} = item
                   return(
                       <div key={id} className="tour-product"  onClick={() => loadCurrentItem(item)}>
                          <img src={image} alt={title}/>
                          <p className="title">{title}</p>
                          <p className="price"><span className='ta'>৳</span>{price}</p>
                       </div>
                   )
               })
           }
           </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(WomenProducts);