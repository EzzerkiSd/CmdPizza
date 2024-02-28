import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as FaIcons from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return ( 
        <div className="footer">
            <p>Pizza</p>
            <ul className='links'>
                <li className='fb'>
                    <Link to='#'><FaIcons.FaFacebook/></Link>
                </li>
                <li className='insta'>
                    <Link to='#'><FaIcons.FaInstagram/></Link>
                </li>
                <li className='yt'>
                    <Link to='#'><FaIcons.FaYoutube/></Link>
                </li>
                <li className='tw'>
                    <Link to='#'><FaIcons.FaTwitter/></Link>
                </li>
                <li className='in'>
                    <Link to='#'><FaIcons.FaLinkedin/></Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Footer;