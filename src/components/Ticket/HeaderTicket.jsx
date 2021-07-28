import React from 'react';
import './Ticket.scss';

const HeaderTicket = ({ logo, price }) => (
    <div className="ticket__header">
        <p className="ticket__price">
            {price.toLocaleString()}
            {' '}
            p
        </p>
        <div className="ticket__logo">
            <img src={`https://pics.avs.io/99/36/${logo}.png`} alt="Logo" />
        </div>
    </div>
);

export default HeaderTicket;
