import React, { Fragment } from 'react';
import './navbar.scss';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    
    return(
        <Fragment>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/movies'>Movies</NavLink></li>
                    <li><NavLink to='/login'>Sign in</NavLink></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar;