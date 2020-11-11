import React from 'react';
import Header from './Component/Header/Header';
import "./App.css"
import Slider from './Component/Slider/Slider';
import Categories from './Component/Categories/Categories';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUpForm from './Component/SignUpForm/SignUpForm';
import FoodDetails from './Component/FoodDetails/FoodDetails';
import { useState } from 'react';
import Placeorder from './Component/Placeorder/Placeorder';
import OrderCompleat from './Component/OrderCompleat/OrderCompleat';
import { PrivateRoute } from './Component/SignUpForm/Auth';
import NotFound from './Component/NotFound/NotFound';
import AboutUs from './Component/AboutUs/AboutUs';
import Footer from './Component/Footer/Footer';

function App(props) {
  let totalItem;
  if (localStorage.getItem('foods')) {
    const GetFoods = JSON.parse(localStorage.getItem('foods'))
    totalItem = GetFoods.length;
  } else {
    totalItem = 0;
  }
  const [CartCount, setCartCount] = useState(totalItem)

  return (
    <>
      <Router>
        <Header FoodItems={CartCount}/>
        <Switch>
          <Route exact path='/' >
            <Slider />
            <Categories CartCounter={CartCount} setCartCount={setCartCount}/>
            <AboutUs />
            <Footer />
          </Route>
          <Route path='/signup'>
            <SignUpForm/>
          </Route>
          <Route path='/food/:keyParameter'>
            <FoodDetails SetCounter={setCartCount}/>
          </Route>
          <PrivateRoute path='/placeorder'>
            <Placeorder CartCounter={CartCount} SetCounter={setCartCount}/>
          </PrivateRoute>
          <PrivateRoute path='/order-compleat'>
            <OrderCompleat />
          </PrivateRoute>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
