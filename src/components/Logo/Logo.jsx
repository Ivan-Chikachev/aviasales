import React from 'react';
import logo from '../../access/img/Logo.svg';
import classes from './Logo.module.scss';

const Logo = () => (
        <div className={classes.logo}>
            <img src={logo} alt="" />
        </div>
    );

export default Logo;
