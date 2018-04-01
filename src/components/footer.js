import React from 'react';
import mail from '../assets/images/mail.png';
import phone from '../assets/images/phone.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';

export default () => (
    <footer>
        <div>
            <img src={mail}/>
            <p>order@mboutique.com</p>
        </div>
        <div>
            <img src={phone}/>
            <p>949.800-3111</p>
        </div>
        <div>
            <p>Follow us</p>
            <img src={facebook}/>
            <img src={twitter}/>
        </div>
        <div>
            <p className="rights">Copyright © 2014 MBoutique. All rights reserved.</p>
        </div>
    </footer>
);