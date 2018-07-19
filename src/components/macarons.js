import React from 'react';
import Header from './header';
import Footer from './footer';
import macarons from '../assets/images/our-macarons-image.png';

export default () => (
    <div>    
        <Header/>
        <div>
            <img id="our-macarons" className="header-image"  src={macarons}/>
        </div>
        <div id="section2">
            <p className="title">Our macarons are freshly made by hand</p>
            <p className="desc">The vivid hues of our unique macarons reflect the natural flavors and essences that infuse the ganache
                filling of these delicious almond cookies – each has its own personality, and all of them are made to savour for
                their delicacy and unique character.</p>
            <p className="title">Classics</p>

            <div>
                <ul id="flavor-list">
                    <li>caribbean chocolate</li>
                    <li>coconut</li>
                    <li>colombian coffee</li>
                    <li>green tea</li>
                    <li>lemon</li>
                    <li>madagascar vanilla</li>
                    <li>passion fruit</li>
                    <li>rose</li>
                    <li>raspbery</li>
                    <li>tiffany blue</li>
                    <li>sicilian pistachio</li>
                    <li>sweet wedding almond</li>
                    <li>violet cassis</li>
                    <li>salted caramel</li>
                </ul>
            </div>
            <p className="desc">After purchase we recommend keeping macarons in the refrigerator; let them come to room temperature before serving -
                about 10 minutes. For best degustation, our macarons should be consumed within 3 days.</p>
        </div>
        <Footer/>
    </div>
);