import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../../Data/Data';
import CategoriesChild from '../CategoriesChild/CategoriesChild';
import './Categories.css';

const Categories = (props) => {
    const [foodData, setFoodData] = useState(
        Data.filter(item => item.category === "lunch")
    );
    const [breakfastStyle, setBreakfastStyle] = useState({
        color: "#000",
    })
    const [lunchStyle, setLunchStyle] = useState({
        color: "#f91944",
        borderBottom: "4px solid #f91944",
    })
    const [dinnerStyle, setDinnerStyle] = useState({
        color: "#000",
    })
    const CartCount = props.CartCounter;

    const lunchHandler = () => {
        const lunchFood = Data.filter(Item => Item.category === "lunch")
        setFoodData(lunchFood);
        setBreakfastStyle({color: "#000"});
        setLunchStyle({color: "#f91944", borderBottom: "4px solid #f91944"});
        setDinnerStyle({color: "#000"});
    }
    const breakfastHandler = () => {
        const breakfastFood = Data.filter(Item => Item.category === "breakfast")
        setFoodData(breakfastFood)
        setBreakfastStyle({color: "#f91944", borderBottom: "4px solid #f91944"});
        setLunchStyle({color: "#000"});
        setDinnerStyle({color: "#000"});
    }
    const dinnerHandler = () => {
        const dinnerFood = Data.filter(Item => Item.category === "dinner")
        setFoodData(dinnerFood);
        setBreakfastStyle({color: "#000"});
        setLunchStyle({color: "#000"});
        setDinnerStyle({color: "#f91944", borderBottom: "4px solid #f91944"});
    }

    const CategoriesToPlaceOrder = () => {
        console.log('Hello From Categories Active Button')
    }

    return (
        <>
            <section className="categories_main_container">
                <div className="container">
                    <div className="categories_names_container d-flex justify-content-between">
                        <strong onClick={breakfastHandler} style={breakfastStyle} className="category_style" >Breakfast</strong>
                        <strong onClick={lunchHandler} style={lunchStyle} className="category_style" >Lunch</strong>
                        <strong onClick={dinnerHandler} style={dinnerStyle} className="category_style" >Dinner</strong>
                    </div>
                    <div className="row categories_food_container">
                        {
                            foodData.map(foodItem => <CategoriesChild key={foodItem.key} Items={foodItem} cartCount={props.setCartCount}/>)
                        }
                    </div>
                    <div className='categories_disable_container'>
                        {
                            CartCount > 0 ?
                            <Link to ='/placeorder' ><button onClick={CategoriesToPlaceOrder} className='categories_active_btn'>Checkout your food</button></Link> :
                            <button className='categories_disabled_btn' disabled>Checkout your food</button>
                        }
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default Categories;