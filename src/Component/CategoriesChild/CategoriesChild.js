import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesChild.css';

const CategoriesChild = (props) => {
    const { key, image, name, description, price } = props.Items;
    const addCartHandler = () => {
        let foodItems = [];
        if (localStorage.getItem('foods') === null) {
            foodItems.push({key, quantity: 1})
        }
        if (localStorage.getItem('foods')) {
            const foodKeys = JSON.parse(localStorage.getItem('foods'))
            const ItemDefined = foodKeys.find(Item => Item.key === key)
            if (ItemDefined === undefined) {
                foodKeys.push({key})
            }
            const QuantityUpdate = foodKeys.find(Item => Item.key === key)
            if (QuantityUpdate === undefined) {
                foodKeys.push({key})
            }
            if (QuantityUpdate.quantity === undefined || QuantityUpdate.quantity === 1) {
                QuantityUpdate['quantity'] = 1
            }
            foodItems.push(foodKeys)
        }
        localStorage.setItem('foods', JSON.stringify(foodItems.flat()));
        const GetFoods = JSON.parse(localStorage.getItem('foods'))
        const totalItem = GetFoods.length;
        const CartCounter = props.cartCount;
        CartCounter(totalItem)
    }
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="categories_child_item">
                    <button onClick={() => addCartHandler()} className="add_cart_container" title='Add to cart'>
                        <svg title='Add to cart' width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path title='Add to cart' fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        <path title='Add to cart' fillRule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </button>
                    <div className="categories_child_img">
                        <img src={image} alt="FoodImage"/>
                    </div>
                    <Link className='categories_child_name' to={`/food/${key}`}>
                        <h5>{name}</h5>
                    </Link>
                    <p>{description}</p>
                    <h5>${price}</h5>
                </div>
            </div>
        </>
    );
};

export default CategoriesChild;