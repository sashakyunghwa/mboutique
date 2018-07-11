import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Macarons from './macarons';
import Giftsparties from './gifts_parties';
import Contact from './contact';
import welcome from '../assets/images/welcome-image.png';
import macarons from '../assets/images/macarons-image.png';
import chocolate from '../assets/images/chocolate.png';
import coconut from '../assets/images/coconut.png';
import violet from '../assets/images/violet-cassis.png';
import greentea from '../assets/images/green-tea.png';
import passionfruit from '../assets/images/passion-fruit.png';
import vanilla from '../assets/images/vanilla.png';
import coffee from '../assets/images/coffee.png';
import pistachio from '../assets/images/pistachio.png';
import raspberry from '../assets/images/raspberry.png';
import lemon from '../assets/images/lemon.png';
import rose from '../assets/images/rose.png';
import tiffanyblue from '../assets/images/tiffany-blue.png';
import caramel from '../assets/images/caramel.png';
import almond from '../assets/images/almond.png';


export default () => (
    <div>
        <Header/>,
            <section>
                <img src={welcome}/>
            <div>
                <img src={macarons}/>
            </div>
            <div>
                <p className="title">Welcome to MBoutique!</p>
                <p className="desc">
                    We're a home-based baking business that specializes in the making of French macarons, a gluten-free
                    pastry item made from ground almonds. Our business began at the West Reading Farmers Market in 2011.
                    Last year (2013) marked our third and final season of participation at the market. MBoutique was
                    established to pay homage to the delicate French confectionery, the macaron. Our shop has been recognized
                    as the connoisseurs of this delicious French pastry because of the wonderful variety of flavors from our
                    great master chefs.
                </p>
                <p className="title">We love Macarons!</p>
                <p className="desc">
                    Renowned macarons, French delights of the moment can be met in a variety of flavors and colors and are
                    brilliant precisely because of their simplicity - a crispy coating, but delicate in a loose blanket jam,
                    chocolate butter cream is spread inviting .
                </p>
                <p className="desc">
                    Macarons combines perfectly with champagne or white wine, tea or hot chocolate, fresh juices and natural
                    fruit flavored coffee and guarantee that these little delights soon become friend that you can not break.
                </p>
                <p className="title">Find that flavor you like. Try a sample every day! </p>
                </div>
            </section>
            <div id="flavors">
                <div>
                    <p className="day">Monday</p>
                    <p className="rest">15:00 - 16:00</p>
                    <p className="rest flavor">chocolate <img src={chocolate}/></p>
                    <p id="coconut" className="rest highlight-flavor flavor">coconut <img src={coconut}/></p>
                </div>
                <div>
                    <p className="day">Tuesday</p>
                    <p className="rest">14:00 - 15:00</p>
                    <p className="rest flavor">violet cassis <img src={violet}/></p>
                    <p id="green-tea" className="rest highlight-flavor flavor">green tea <img src={greentea}/></p>
                </div>
                <div>
                    <p className="day">Wednesday</p>
                    <p className="rest">09:00 - 10:00</p>
                    <p className="rest flavor">passion fruit <img src={passionfruit}/></p>
                    <p id="vanilla" className="rest highlight-flavor flavor">vanilla <img src={vanilla}/></p>
                </div>
                <div>
                    <p className="day">Thursday</p>
                    <p className="rest">18:00 - 19:00</p>
                    <p className="rest flavor">coffee <img src={coffee}/></p>
                    <p id="pistachio" className="rest highlight-flavor flavor">pistachio <img src={pistachio}/></p>
                </div>
                <div>
                    <p className="day">Friday</p>
                    <p className="rest">11:00 - 12:00</p>
                    <p className="rest flavor">raspbery <img src={raspberry}/></p>
                    <p id="lemon" className="rest highlight-flavor flavor">lemon <img src={lemon}/></p>
                </div>
                <div>
                    <p className="day">Saturday</p>
                    <p className="rest">13:00 - 14:00</p>
                    <p className="rest flavor">rose <img src={rose}/></p>
                    <p id="tiffany-blue" className="rest highlight-flavor flavor">tiffany blue <img src={tiffanyblue}/></p>
                </div>
                <div>
                    <p className="day">Sunday</p>
                    <p className="rest">10:00 - 11:00</p>
                    <p className="rest flavor">caramel <img src={caramel}/></p>
                    <p id="almond" className="rest highlight-flavor flavor">almond <img src={almond}/></p>
                </div>
            </div>
        <Footer/>
    </div>
)