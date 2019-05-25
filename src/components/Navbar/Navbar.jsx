import React from 'react';
import c from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.nav_item}><a href="#" className={`${c.nav_link} ${c.active}`}>Profile</a></div>
            <div className={c.nav_item}><a href="#" className={c.nav_link}>Messages</a></div>
            <div className={c.nav_item}><a href="#" className={c.nav_link}>News</a></div>
            <div className={c.nav_item}><a href="#" className={c.nav_link}>Music</a></div>
            <div className={c.nav_item}><a href="#" className={c.nav_link}>Settings</a></div>
        </nav>
    );
}
export default Navbar;