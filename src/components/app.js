import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Macarons from './macarons';
import Gifts from './gifts_parties';
import Contact from './contact';

const App = () => (
    <div>
        <Route exact path='/mboutique/dist/' component={Home}/>
        <Route path='/mboutique/dist/macarons' component={Macarons}/>
        <Route path='/mboutique/dist/gifts_parties' component={Gifts}/>
        <Route path='/mboutique/dist/contact' component={Contact}/>
    </div>
);

export default App;
