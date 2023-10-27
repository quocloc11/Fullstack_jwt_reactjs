import React from 'react';
import './Nav.scss'
import {NavLink} from 'react-router-dom'
const Nav=(props) =>{
    return (
        <div>
            <div className='topnav'>
                <NavLink  to='/' exact>Home</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </div>
    );
}

export default Nav;

