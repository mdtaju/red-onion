import React from 'react';
import ChefImage1 from '../../Resources/Image/adult-blur-blurred-background-687824.png';
import ChefImage2 from '../../Resources/Image/chef-cook-food-33614.png';
import ChefImage3 from '../../Resources/Image/architecture-building-city-2047397.png';
import Icon1 from '../../Resources/ICON/Group 204.png';
import Icon2 from '../../Resources/ICON/Group 1133.png';
import Icon3 from '../../Resources/ICON/Group 245.png';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <section className="container">
                <div className='aboutUs_main_title_aria'>
                    <h3>Why you choose us</h3>
                    <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='AboutUs_categories'>
                            <img className='AboutUs_ChefImage' src={ChefImage1} alt="Chef"/>
                            <div className="media">
                                <img src={Icon1} className="align-self-start mr-3" alt="CheapImage" />
                                <div className="media-body">
                                    <h5 className="mt-0">Fast Delivery</h5>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio.</p>
                                    <span className='aboutUs_seeMore'>See more &nbsp;
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='AboutUs_categories'>
                            <img className='AboutUs_ChefImage' src={ChefImage2} alt="Chef"/>
                                <div className="media">
                                    <img src={Icon2} className="align-self-start mr-3" alt="CheapImage" />
                                    <div className="media-body">
                                        <h5 className="mt-0">A Good Auto Responder</h5>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio.</p>
                                        <span className='aboutUs_seeMore'>See more &nbsp;
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='AboutUs_categories'>
                            <img className='AboutUs_ChefImage' src={ChefImage3} alt="Chef"/>
                            <div className="media">
                                <img src={Icon3} className="align-self-start mr-3" alt="CheapImage" />
                                <div className="media-body">
                                    <h5 className="mt-0">Home Delivery</h5>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio.</p>
                                    <span className='aboutUs_seeMore'>See more &nbsp;
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;