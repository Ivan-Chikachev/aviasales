import React from 'react';
import './Ticket.scss';

const TimeWay = ({ i }) => {
    const hours = Math.floor(i.segments[0].duration / 60);
    const mins = i.segments[0].duration - (hours * 60);

    const hours2 = Math.floor(i.segments[1].duration / 60);
    const mins2 = i.segments[1].duration - (hours2 * 60);

    return (
        <div className="ticket__item">
            <div className="ticket__name">
                В пути
            </div>
            <div className="ticket__text ticket__text--time">
                {hours}
                ч
                {mins}
                м
            </div>
            <div className="ticket__name">
                В пути
            </div>
            <div className="ticket__text ticket__text--time">
                {hours2}
                ч
                {mins2}
                м
            </div>
        </div>
    );
};

export default TimeWay;
