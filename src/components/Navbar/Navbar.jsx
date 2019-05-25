import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={c.nav}>
            <div className={c.nav_item}>
                <NavLink to="/profile" className={c.nav_link} activeClassName={c.active}>Profile</NavLink>
            </div>
            <div className={c.nav_item}>
                <NavLink to="/messages" className={c.nav_link} activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.nav_item}>
                <NavLink to="/news" className={c.nav_link} activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.nav_item}>
                <NavLink to="/music" className={c.nav_link} activeClassName={c.active}>Music</NavLink>
            </div>
            <div className={c.nav_item}>
                <NavLink to="/settings" className={c.nav_link} activeClassName={c.active}>Settings</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;