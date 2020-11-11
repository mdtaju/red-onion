import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../../Data/Data';
import PlaceorderChild from '../PlaceorderChild/PlaceorderChild';
import './Placeorder.css';

const Placeorder = (props) => {
    const Foods = JSON.parse(localStorage.getItem('foods'))
    const [millItems, setMillItems] = useState(Foods)
    const SetCartCounter = props.SetCounter;

    const QuantityDecrement = (Pkey) => {
        const SwapItems = millItems;
        SwapItems.find(item => item.key === Pkey && item.quantity > 1 && (item.quantity --))
        localStorage.setItem('foods', JSON.stringify(SwapItems))
        const GetFoods = JSON.parse(localStorage.getItem('foods'))
        setMillItems(GetFoods)
    }

    const QuantityIncrement = (Pkey) => {
        const SwapItem = millItems;
        SwapItem.find(item => item.key === Pkey && (item.quantity ++))
        localStorage.setItem('foods', JSON.stringify(SwapItem))
        const GetFoods = JSON.parse(localStorage.getItem('foods'))
        setMillItems(GetFoods)
    }

    const RemoveFoodItems = (Pkey) => {
        const currentItems = millItems.filter(mills => mills.key !== Pkey)
        localStorage.setItem('foods', JSON.stringify(currentItems))
        const GetFoods = JSON.parse(localStorage.getItem('foods'))
        const totalItem = GetFoods.length;
        SetCartCounter(totalItem)
        setMillItems(currentItems) 
    }
    const CartItems = Foods && millItems.map(Item => (
        Data.filter(item => Item.key === item.key && (item['quantity'] = Item.quantity))
    ))

    const CartFoods = Foods && CartItems.flat();

    const SubtotalArray = Foods && CartFoods.map(Item => Item.price * Item.quantity)
    const Subtotal = Foods && SubtotalArray.reduce((total, price) => total + price, 0)
    const TaxDivide = Subtotal / 100;
    const Tax = TaxDivide * 2;
    let DeliveryFee;
    if (Subtotal > 0) {
        DeliveryFee = 5;
    } else {
        DeliveryFee = 0;
    }
    const Total = Subtotal + Tax + DeliveryFee;

    const FixedNumber = (element) => Foods && element.toFixed(2);

    const CartCount = props.CartCounter;
    const ClearStorageHandler = () => {
        localStorage.clear()
        SetCartCounter(0);
    }
    return (
        <>
            <section className="placeOrder_main_container">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-5 col-md-5">
                            <h4 className='placeOrder_details_title'>Edit Delivery Details</h4>
                            <form action="">
                                <input type="text" name="" placeholder='Deliver to Door' className='form-control form_style'/>
                                <input type="text" name="" placeholder='107 Rd No 8' className='form-control form_style'/>
                                <input type="text" name="" placeholder='Flat, suite or floor' className='form-control form_style'/>
                                <input type="text" name="" placeholder='Business Name' className='form-control form_style'/>
                                <input type="text" name="" placeholder='Add delivery instructor' className='form-control form_style'/>
                                <button type="submit" className='form_submit'>Save and Continue</button>
                            </form>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className='placeOrder_order_container'>
                                <p>From</p>
                                <p>Chittagong Plaza Restaurant GPR</p>
                                <p>107 Rd No 8</p>
                                <div className="placeOrder_foodItem_container">
                                    {
                                       Foods && CartFoods.map(Item => <PlaceorderChild key={Item.key} foodItems={Item} RemoveItem={RemoveFoodItems} Increment={QuantityIncrement} Decrement={QuantityDecrement}/>)
                                    }
                                </div>
                                <div className="place_order_prices_container">
                                    <div className="d-flex justify-content-between">
                                        <p>Subtotal</p>
                                    <p>$ {FixedNumber(Subtotal)}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Tax</p>
                                    <p>$ {FixedNumber(Tax)}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Delivery Fee</p>
                                    <p>$ {DeliveryFee}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Total</p>
                                    <p>$ {FixedNumber(Total)}</p>
                                    </div>
                                </div>
                                {
                                    CartCount > 0 ?
                                    <Link to='/order-compleat'><button onClick={ClearStorageHandler} className='form_submit'>Place Order</button></Link> :
                                    <button className='form_submit_disabled' disabled>Place Order</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Placeorder;