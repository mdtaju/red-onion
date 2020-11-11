import React from 'react';
import MapImage from '../../Resources/ordercomplete.png';
import BikeImage from '../../Resources/Image/Group 1151.png';
import UserImage from '../../Resources/Image/Group 1152.png'
import './OrderCompleat.css';
import { AuthChange } from '../SignUpForm/Auth';

const OrderCompleat = () => {
    const auth = AuthChange()
    return (
        <>
            <section className="container orderCompleat_mainSection">
                <div className="row d-flex justify-content-between order_compleat_subSection">
                    <div className="col-md-7 orderCompleat_mapImage_container">
                        <img className='MapImage_Container' src={MapImage} alt="Location"/>
                    </div>
                    <div className="col-md-4 orderCompleat_detail_main_container">
                        <div className='orderCompleat_detail_mainAria'>
                            <div className="bikeImage_container">
                                <img src={BikeImage} alt="BikeImage"/>
                            </div>
                            <div className="d-flex order_compleat_user_name_container">
                                <div className="order_compleat_user_image">
                                    <img src={UserImage} alt="UserImage"/>
                                </div>
                            {
                                auth && <div>
                                    <h4>{auth.name}</h4>
                                    <p>Your Raider</p>
                                </div>
                            }
                            </div>
                            <button className='form_submit'>Contact</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderCompleat;