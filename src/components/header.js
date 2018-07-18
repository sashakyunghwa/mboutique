import React from 'react';
import { Link } from 'react-router-dom';
import Macarons from './macarons';
import logo from '../assets/images/logo.png';

export default () => (    
    <header>
        <img id="logo" src={logo}/>
            <nav className="regular-menu">
                <Link to="/">WELCOME</Link>
                <Link to="/macarons">OUR MACARONS</Link>
                <Link to="/gifts_parties">GIFTS &amp; PARTIES</Link>
                <Link to="/contact">CONTACT</Link>
            </nav>
            <nav className="hamburger-menu navbar navbar-light light-blue lighten-4">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                    aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fa fa-bars fa-1x"></i></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/">WELCOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/macarons">OUR MACARONS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gifts_parties">GIFTS &amp; PARTIES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
                </header>
            );