import React from 'react';
import classes from '../Ticket.module.scss';
import HeaderTicket from './HeaderTicket';
import CityWay from './CityWay';
import TimeWay from './TimeWay';
import TransferWay from './TransferWay';

const TicketItem = ({ item }) => (
        <div className={classes.ticket}>
            <HeaderTicket logo={item.carrier} price={item.price} />
            <div className={classes.ticket__about}>
                <CityWay forward={item.segments[0]} back={item.segments[1]} />
                <TimeWay forward={item.segments[0].duration} back={item.segments[1].duration} />
                <TransferWay forward={item.segments[0].stops} back={item.segments[1].stops} />
            </div>
        </div>
    );

export default TicketItem;
