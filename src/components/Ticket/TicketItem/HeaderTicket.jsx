import React from 'react';
import classes from '../Ticket.module.scss';

const HeaderTicket = ({ logo, price }) => (
    <div className={classes.ticket__header}>
        <p className={classes.ticket__price}>
            {price.toLocaleString()}
            {' '}
            p
        </p>
        <div className={classes.ticket__logo}>
            <img src={`https://pics.avs.io/99/36/${logo}.png`} alt="Logo" />
        </div>
    </div>
);

export default HeaderTicket;
