import React from 'react';
import classes from './Ticket.module.scss';

const TransferWay = ({ item }) => (
    <div className={classes["ticket__item"]}>
        <div className={classes["ticket__name"]}>
            {item.segments[0].stops.length}
            {' '}
            Пересадки
        </div>
        <div className={classes["ticket__text"]}>
            {item.segments[0].stops.join(', ')}
        </div>
        <div className={classes["ticket__name"]}>
            {item.segments[1].stops.length}
            {' '}
            Пересадки
        </div>
        <div className={classes["ticket__text"]}>
            {item.segments[1].stops.join(', ')}
        </div>
    </div>
);

export default TransferWay;
