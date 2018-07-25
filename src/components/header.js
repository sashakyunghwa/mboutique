import React from 'react';
import { Link } from 'react-router-dom';
import Macarons from './macarons';
import logo from '../assets/images/logo.png';

class Header extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    hamburgerMenuToggle() {
        const newValue = !this.state.menuOpen;
        this.setState({
            menuOpen: newValue
        })
    } 

    render() {
        return (
            <header>
                <img id="logo-one" src={logo}/>
                <nav className="regular-nav-bar">
                    <Link to="/mboutique/dist/">WELCOME</Link>
                    <Link to="/mboutique/dist/macarons">OUR MACARONS</Link>
                    <Link to="/mboutique/dist/gifts_parties">GIFTS &amp; PARTIES</Link>
                    <Link to="/mboutique/dist/contact">CONTACT</Link>
                </nav>
                <nav className="hamburger-menu navbar navbar-light">
                    <a className="navbar-brand" href="#"><img id="logo" src={logo}/></a>
                    <button onClick={() => this.hamburgerMenuToggle()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                        aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text navbar-toggler-icon"><i className="fa fa-bars fa-1x"></i></span></button>
                    <div className={"collapse navbar-collapse" + (this.state.menuOpen ? " show" : "")} id="navbarSupportedContent1">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">WELCOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/macarons">OUR MACARONS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gifts_parties">GIFTS &amp; PARTIES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>   
            </header>
        )
    }
}

export default Header;
   
    