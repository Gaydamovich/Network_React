import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://bordberinsk.ru/wp-content/uploads/2018/11/vk-icon.png' width='45px' height='45px'/>
        </header>
    )
}

export default Header;