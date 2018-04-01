import React from 'react';
import Header from './header';
import Footer from './footer';
import contact from '../assets/images/contact-image.png';
import macarons from '../assets/images/macarons-image.png';


export default () => (
    <div>
        <Header/>
        <div>
            <img src={contact}/>
        </div>
        <div id="section4">
            <div>
                <p className="title">Visit us!</p>
                <p className="desc">Monday - Friday | 10am - 9pm
                <br/>Saturday | 10am – 8pm
                <br/>Sunday | 11am – 7pm
                <br/>Closed Thanksgiving Day, Christmas Day and Easter Day</p>
                <p className="desc">1625 Post St <br/> San Francisco, CA 94115</p>
                <p className="desc">949.800-3111</p>
                <p className="desc">order@mboutique.com</p>
                <p className="desc">Send your questions, comments and flavor suggestions or place an order!</p>
            </div>
            <div>
                <p className="title">Contact Form</p>
                <form action="">
                    <input placeholder="Name" type="text"/>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Phone" type="text"/>
                    <input placeholder="Subject" type="text"/>
                    <textarea placeholder="Message"></textarea>
                    <input type="submit"/>
                </form>
            </div>
            <div>
                <img className="macarons-background-image" src={macarons}/>
            </div>
        </div>
        <Footer/>
    </div>
);