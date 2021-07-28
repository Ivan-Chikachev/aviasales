import React from 'react';
import './Ticket.scss';
import { format } from 'date-fns';

const CityWay = ({ i }) => {
    const getDate = (date, duration) => {
        const newDate = new Date(date);
        const pointA = newDate.getTime();
        const pointB = pointA + duration * 60 * 1000;
        return [
            format(new Date(date), 'hh:mm'),
            format(new Date(pointB), 'hh:mm'),
        ];
    };

    const [originPoint1, originPoint2] = getDate(i.segments[0].date, i.segments[0].duration);
    const [destPoint1, destPoint2] = getDate(i.segments[1].date, i.segments[1].duration);

    return (
        <div className="ticket__item">
            <div className="ticket__name">
                {i.segments[0].origin}
                {' '}
                -
                {i.segments[0].destination}
            </div>
            <div className="ticket__text">
                {originPoint1}
                {' '}
                -
                {originPoint2}
            </div>
            <div className="ticket__name">
                {i.segments[1]?.origin}
                {' '}
                -
                {i.segments[1].destination}
            </div>
            <div className="ticket__text">
                {destPoint1}
                {' '}
                -
                {destPoint2}
            </div>
        </div>
    );
};

export default CityWay;
