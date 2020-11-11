import React from 'react';
import "./Slider.css";

const Slider = () => {
    return (
        <>
            <section className="slider_main_container">
                <div className="container slider_sub_container d-flex align-items-center justify-content-center">
                    <div className="slider_text_aria">
                        <h2>Best food waiting for your belly</h2>
                        <input type="search" placeholder="Search food items" name="" id="" className="form-control rounded-pill"/><button className="main_btn rounded-pill">Search</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slider;