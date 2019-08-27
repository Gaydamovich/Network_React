import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://support.socialkit.ru/s/cache/98/a5/98a5cb6e69486942a6551335db1cf593.png' width='45px' height='45px'/>
        </header>
    )
}

export default Header;