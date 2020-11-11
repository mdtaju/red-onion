import React from 'react';
import Logo from '../../Resources/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className='footer_main_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer_elements">
                            <div className="footer_logo_container"><img src={Logo} alt="Logo"/></div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer_elements">
                            <p className="footer_option">About online food</p>
                            <p className="footer_option">Read our blog</p>
                            <p className="footer_option">Sign up to deliver</p>
                            <p className="footer_option">Add your restaurant</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer_elements">
                            <p className="footer_option">Get help</p>
                            <p className="footer_option">Read FAQs</p>
                            <p className="footer_option">View all cities</p>
                            <p className="footer_option">Restaurants near me</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer_elements">
                            <div className="d-flex justify-content-around">
                                <a href="https://www.facebook.com/tajumd512ctg/"><FacebookIcon className='footer_icon'/></a>
                                <a href="https://twitter.com/MdTaju_512"><TwitterIcon className='footer_icon'/></a>
                                <a href="https://www.linkedin.com/in/md-taju-9a2b7a175/"><LinkedInIcon className='footer_icon'/></a>
                                <a href="https://github.com/mdtaju"><GitHubIcon className='footer_icon'/></a>
                            </div>
                        </div>
                    </div>
                    <p className='footer_copyright'>Copyright &copy; 2020 Online food</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;