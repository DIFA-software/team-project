import React from 'react';

import Home from "./Home"
import About from './About';
import Shopping from "./Shopping";
import Cart from "./Cart";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";

const Main = () => {
    return (
      <main>
          <Switch>
              <Route  path = "/"  exact component={Home}/>
              <Route path = "/about" component={About}/>
              <Route path = "/shopping" component={Shopping}/>
              <Route path = "/cart" component={Cart}/>
              <Route path = "/login" component={Login}/>
            </Switch>
      </main>
       
   

    );
};

export default Main;