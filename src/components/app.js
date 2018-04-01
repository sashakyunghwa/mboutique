import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Macarons from './macarons';
import Gifts from './gifts_parties';
import Contact from './contact';

const App = () => (
    <div>
        <Route exact path='/' component={Home}/>
        <Route path='/macarons' component={Macarons}/>
        <Route path='/gifts_parties' component={Gifts}/>
        <Route path='/contact' component={Contact}/>
    </div>
);

export default App;
