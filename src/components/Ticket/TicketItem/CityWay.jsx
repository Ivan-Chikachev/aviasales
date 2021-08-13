import React from 'react';
import { format } from 'date-fns';
import classes from '../Ticket.module.scss';

const CityWay = ({ forward, back }) => {
    const getDate = (date, duration) => {
        const newDate = new Date(date);
        const pointA = newDate.getTime();
        const pointB = pointA + duration * 60 * 1000;
        return [
            format(new Date(date), 'hh:mm'),
            format(new Date(pointB), 'hh:mm'),
        ];
    };

    const [originPoint1, originPoint2] = getDate(forward.date, forward.duration);
    const [destPoint1, destPoint2] = getDate(back.date, back.duration);

    return (
        <div className={classes.ticket__item}>
            <div className={classes.ticket__name}>
                {`${forward.origin} - ${forward.destination}`}
            </div>
            <div className={classes.ticket__text}>
                {`${originPoint1} - ${originPoint2}`}
            </div>
            <div className={classes.ticket__name}>
                {`${back.origin} - ${back.destination}`}
            </div>
            <div className={classes.ticket__text}>
                {`${destPoint1} - ${destPoint2}`}
            </div>
        </div>
    );
};

export default CityWay;
