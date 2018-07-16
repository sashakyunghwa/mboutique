import React from 'react';
import Header from './header';
import Footer from './footer';
import giftsparties from '../assets/images/gifts-parties-image.png';

export default () => (
    <div>  
        <Header/>,  
        <div> 
        <img id="gifts-parties" className="big-image" src={giftsparties}/>
        </div>
        <div id="section3">
            <p className="title">Let's eat macarons!</p>
            <p className="desc">We make it easy to share la passion du macaron with your friends, family and colleagues. Choose from
                our array of premium gift options, or we can create a custom solution.
                Contact us when you need help planning your celebration! <a href="">orders@mboutique.com</a>
            </p>
            <p className="title">Gift boxes</p>

            <p>Our signature gift boxes make macarons the perfect gift for any occasion.</p>

            <ul>
                <li>gift box of 6 macarons in raspberrywhite - $ 10</li>
                <li>gift box of 12 macarons in white, pistachio, or violet – $20</li>
                <li>gift box of 24 macarons in violet – $40</li>
                <li>gift box of 36 macarons in silver – $60</li>
                <li>gift box à la ronde of 60 macarons in violet or silver – $120</li>
            </ul>

            <p className="title">Party tower</p>

            <p className="desc">Our 5-tiered party tower becomes the centerpiece of any special event or private celebration,
                elegantly presenting your unique selection of sixty macarons.
            </p>

            <ul>
                <li>tower of 60 macarons – $120</li>
            </ul>
        </div>
        <Footer/>
    </div>
);