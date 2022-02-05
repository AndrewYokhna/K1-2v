import React from 'react';
import p from './Nav.module.css';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return <div className={p.nav}>
        <div className={`${p.item} ${p.activeLink}`}>
            <div >
                <NavLink to="/profile" activeClassName={p.activeLink}> Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialog' activeClassName={p.activeLink}> Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={p.activeLink}> News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={p.activeLink}> Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={p.activeLink}> Settings</NavLink>
            </div>
        </div>
    </div>
}

export default Navbar;