import React from 'react';
import classes from './Ticket.module.scss';

const TimeWay = ({ item }) => {
    const hour = Math.floor(item.segments[0].duration / 60);
    const min = item.segments[0].duration - (hour * 60);

    const hour2 = Math.floor(item.segments[1].duration / 60);
    const min2 = item.segments[1].duration - (hour2 * 60);

    return (
        <div className={classes["ticket__item"]}>
            <div className={classes["ticket__name"]}>
                В пути
            </div>
            <div className={classes["ticket__text"] + ' ' + classes["ticket__text--time"]}>
                {hour}
                ч
                {min}
                м
            </div>
            <div className={classes["ticket__name"]}>
                В пути
            </div>
            <div className={classes["ticket__text"] + ' ' + classes["ticket__text--time"]}>
                {hour2}
                ч
                {min2}
                м
            </div>
        </div>
    );
};

export default TimeWay;
