import React from 'react';
import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <a className={c.logo} href="#">
                <div className={c.logo_img}>
                    <img src="http://www.trzcacak.rs/file/max/14/144238_website-logo-png.png" alt="logo" />
                </div>
                <div className={c.logo_text}>Social Networkk</div>
            </a>
        </header>
    );
}
export default Header;