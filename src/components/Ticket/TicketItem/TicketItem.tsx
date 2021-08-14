import React from 'react';
import classes from '../Ticket.module.scss';
import HeaderTicket from './HeaderTicket';
import CityWay from './CityWay';
import TimeWay from './TimeWay';
import TransferWay from './TransferWay';
import {TicketsType} from "../../../types/types";

type PropTypes = {
    item: TicketsType
}

const TicketItem: React.FC<PropTypes> = ({item}) => (
    <div className={classes.ticket}>
        <HeaderTicket logo={item.carrier} price={item.price}/>
        <div className={classes.ticket__about}>
            <CityWay forward={item.segments[0]} back={item.segments[1]}/>
            <TimeWay durationTo={item.segments[0].duration} durationBack={item.segments[1].duration}/>
            <TransferWay stopsTo={item.segments[0].stops} stopsBack={item.segments[1].stops}/>
        </div>
    </div>
);

export default TicketItem;
