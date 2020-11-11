import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Data/Data';
import './FoodDetails.css'

const FoodDetails = (props) => {
    const [foodCount, setFoodCount] = useState(1)
    const {keyParameter} = useParams();
    const FoodData = Data.find(Item => Item.key === keyParameter);
    const { key, name, image, price } = FoodData
    const foodIncrement = () => {
        if (foodCount > 1) {
            setFoodCount(foodCount - 1)
        }
    }
    const foodDecrement = () => {
        setFoodCount(foodCount + 1)
    }
    const addCartHandler = () => {
        let foodItems = [{key}]
        const Quantity = foodItems.find(Item => Item.key === key)
        Quantity['quantity'] = foodCount
        if (localStorage.getItem('foods')) {
            const foodKeys = JSON.parse(localStorage.getItem('foods'))
            const foodKeysFilter = foodKeys.filter(Item => Item.key !== key)
            foodItems.push(foodKeysFilter)
        }
        localStorage.setItem('foods', JSON.stringify(foodItems.flat()))
        const GetFoods = JSON.parse(localStorage.getItem('foods'))
        const totalItem = GetFoods.length;
        const setCartCounter = props.SetCounter;
        setCartCounter(totalItem)
    }
    return (
        <>
            <section className="foodDetails_main_aria">
                <div className="container">
                    <div className="row d-flex justify-content-between foodDetails_colum_reverse">
                        <div className="col-md-6">
                           <div>
                                <h1 className='foodDetails_name'>{name}</h1>
                                <p className='foodDetails_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quisquam soluta ut commodi itaque mollitia dolores blanditiis delectus temporibus necessitatibus minima non fugit amet qui, officia iure labore, vero laboriosam?</p>
                                <div className="foodDetails_price d-flex align-items-center justify-content-between">
                                    <h2>${price}</h2>
                                    <div className='foodDetails_counter rounded-pill d-flex align-items-center justify-content-between'>
                                        <strong onClick={foodIncrement} className='foodDetails_counter_text'>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                            </svg>
                                        </strong>
                                        <strong className='foodDetails_count_number'>{foodCount}</strong>
                                        <strong onClick={foodDecrement} className='foodDetails_counter_text'>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                            </svg>
                                        </strong>
                                    </div>
                                </div>
                                <button onClick={addCartHandler} className="main_btn rounded-pill d-flex align-items-center justify-content-center foodDetails_add_button">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                    </svg> &nbsp; Add
                                </button>
                           </div>
                        </div>
                        <div className="col-md-5 d-flex justify-content-end">
                            <div className="foodDetails_img"><img src={image} alt=""/></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FoodDetails;