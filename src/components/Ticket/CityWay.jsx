import React from 'react';
import classes from './Ticket.module.scss';
import { format } from 'date-fns';

const CityWay = ({ item }) => {
    const getDate = (date, duration) => {
        const newDate = new Date(date);
        const pointA = newDate.getTime();
        const pointB = pointA + duration * 60 * 1000;
        return [
            format(new Date(date), 'hh:mm'),
            format(new Date(pointB), 'hh:mm'),
        ];
    };

    const [originPoint1, originPoint2] = getDate(item.segments[0].date, item.segments[0].duration);
    const [destPoint1, destPoint2] = getDate(item.segments[1].date, item.segments[1].duration);

    return (
        <div className={classes["ticket__item"]}>
            <div className={classes["ticket__name"]}>
                {item.segments[0].origin}
                {' '}
                -
                {item.segments[0].destination}
            </div>
            <div className={classes["ticket__text"]}>
                {originPoint1}
                {' '}
                -
                {originPoint2}
            </div>
            <div className={classes["ticket__name"]}>
                {item.segments[1]?.origin}
                {' '}
                -
                {item.segments[1].destination}
            </div>
            <div className={classes["ticket__text"]}>
                {destPoint1}
                {' '}
                -
                {destPoint2}
            </div>
        </div>
    );
};

export default CityWay;
