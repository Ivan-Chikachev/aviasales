import React from 'react';
import './Ticket.scss';

const TransferWay = ({ i }) => (
    <div className="ticket__item">
        <div className="ticket__name">
            {i.segments[0].stops.length}
            {' '}
            Пересадки
        </div>
        <div className="ticket__text">
            {i.segments[0].stops.join(', ')}
        </div>
        <div className="ticket__name">
            {i.segments[1].stops.length}
            {' '}
            Пересадки
        </div>
        <div className="ticket__text">
            {i.segments[1].stops.join(', ')}
        </div>
    </div>
);

export default TransferWay;
