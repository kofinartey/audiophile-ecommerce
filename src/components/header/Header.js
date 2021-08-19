import React from 'react'
import Logo from '../logo/Logo'
import { Link } from 'react-router-dom';
import HeaderStyles from './HeaderStyles'

function Header() {
    const classes = HeaderStyles();
    return (
        <nav className={classes.Header}>
            <div className={classes.wrapper}>
                <Logo/>
                <div className={classes.nav__item}>
                    <Link>HOME</Link>
                    <Link>HEADPHONES</Link>
                    <Link>SPAKERS</Link>
                    <Link>EARPHONES</Link>
                </div>

            </div>
          
        </nav>
    )
}

export default Header
