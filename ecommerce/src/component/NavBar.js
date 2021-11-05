import React from 'react';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <ul>
            <li><NavLink activeClassName="active" to="/" exact> Home</NavLink> </li>
            <li><NavLink  activeClassName="active" to="/about"> About us</NavLink> </li>
            <li><NavLink  activeClassName="active" to="/shopping">Shopping</NavLink> </li>
            <li><NavLink  activeClassName="active" to="/cart"> Cart</NavLink> </li>
            <li><NavLink  activeClassName="active" to="/Login"> Log in</NavLink> </li>

        </ul>
    </div>
    );
};

export default NavBar;