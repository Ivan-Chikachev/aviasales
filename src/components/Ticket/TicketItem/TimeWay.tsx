import React from 'react';
import classes from '../Ticket.module.scss';

type PropTypes = {
    durationTo: number
    durationBack: number
}

const TimeWay: React.FC<PropTypes> = ({ durationTo, durationBack }) => {
    const hour = Math.floor(durationTo / 60);
    const min = durationTo - (hour * 60);

    const hour2 = Math.floor(durationBack / 60);
    const min2 = durationBack - (hour2 * 60);

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
