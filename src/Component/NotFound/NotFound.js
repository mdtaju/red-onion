import React from 'react';
import ErrorImage from '../../Resources/banner_error_404.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <>
            <section className="container">
                <div className='ErrorImage_container'>
                    <img src={ErrorImage} alt="ErrorImage"/>
                </div>
            </section>
        </>
    );
};

export default NotFound;