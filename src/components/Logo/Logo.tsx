import React from 'react';
import logo from '../../access/img/Logo.svg';
import classes from './Logo.module.scss';

const Logo: React.FC = () => (
        <div className={classes.logo}>
            <img src={logo} alt="" />
        </div>
    );

export default Logo;
