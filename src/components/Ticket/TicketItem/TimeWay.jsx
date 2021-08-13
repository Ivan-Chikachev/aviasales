import React from 'react';
import classes from '../Ticket.module.scss';

const TimeWay = ({ forward, back }) => {
    const hour = Math.floor(forward / 60);
    const min = forward - (hour * 60);

    const hour2 = Math.floor(back / 60);
    const min2 = back - (hour2 * 60);

    return (
        <div className={classes.ticket__item}>
            <div className={classes.ticket__name}>
                В пути
            </div>
            <div className={`${classes.ticket__text} ${classes['ticket__text--time']}`}>
                {`${hour} ч ${min} м`}
            </div>
            <div className={classes.ticket__name}>
                В пути
            </div>
            <div className={`${classes.ticket__text} ${classes['ticket__text--time']}`}>
                {`${hour2} ч ${min2} м`}
            </div>
        </div>
    );
};

export default TimeWay;
