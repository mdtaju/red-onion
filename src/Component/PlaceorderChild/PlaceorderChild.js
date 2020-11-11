import React from 'react';
import './PlaceorderChild.css';

const PlaceorderChild = (props) => {
    const RemoveHandler = props.RemoveItem;
    const QuantityDecrement = props.Decrement;
    const QuantityIncrement = props.Increment;
    const { key, image, name, price, quantity } = props.foodItems;
    return (
        <>
            <div className="row d-flex align-items-center placeOrderChild_main_container">
                <div className="col-md-4 placeOrderChild_img_container">
                    <img className="placeOrderChild_img" src={image} alt="FoodImage"/>
                </div>
                <div className="col-md-5">
                    <h6 className='placeOrderChild_name'>{name}</h6>
                    <h4 className='placeOrderChild_price'>${price}</h4>
                    <p>Available</p>
                    <button onClick={() => RemoveHandler(key)} className="btn btn-danger">Remove</button>
                </div>
                <div className="col-md-3 placeOrderChild_quantity">
                    <div className='placeOrderChild_quantity_sub rounded-pill d-flex align-items-center justify-content-between'>
                        <strong onClick={() => QuantityDecrement(key)} className='foodDetails_counter_text'>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </strong>
                        <strong className='foodDetails_count_number'>{quantity}</strong>
                        <strong onClick={() => QuantityIncrement(key)} className='foodDetails_counter_text'>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </strong>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceorderChild;