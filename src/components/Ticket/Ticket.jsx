import React from 'react';
import './Ticket.scss';
import HeaderTicket from './HeaderTicket';
import CityWay from './CityWay';
import TimeWay from './TimeWay';
import TransferWay from './TransferWay';

const Ticket = ({ tickets }) => (
    <div className="ticket-container">
        {tickets.map((i) => (
            <div key={i.price} className="ticket">
                <HeaderTicket logo={i.carrier} price={i.price} />
                <div className="ticket__about">
                    <CityWay i={i} />
                    <TimeWay i={i} />
                    <TransferWay i={i} />
                </div>
            </div>
        ))}
    </div>
);

export default Ticket;
