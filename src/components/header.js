import React from 'react';
import { Link } from 'react-router-dom';
import Macarons from './macarons';
import logo from '../assets/images/logo.png';

export default () => (    
    <header>
        <img src={logo}/>
            <nav>
                <Link to="/">WELCOME</Link>
                <Link to="/macarons">Our Macarons</Link>
                <Link to="/gifts_parties">GIFTS &amp; PARTIES</Link>
                <Link to="/contact">CONTACT</Link>
            </nav>
    </header>
);