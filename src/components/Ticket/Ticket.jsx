import React, {useEffect} from 'react';
import classes from './Ticket.module.scss';
import HeaderTicket from './HeaderTicket';
import CityWay from './CityWay';
import TimeWay from './TimeWay';
import TransferWay from './TransferWay';
import {connect} from "react-redux";
import * as actions from "../../redux/Tickets/ticketsActions";
import Loader from "../Loader/Loader";
import ShowButton from "../ShowButton/ShowButton";

const Ticket = ({searchId, tickets, getTickets, getSearchId, isLoad}) => {
    useEffect(() => {
        getSearchId()
    }, []);

    useEffect(() => {
        getTickets(searchId)
    }, [searchId]);
    return (
        <div className={classes["ticket-container"]}>
            {isLoad && <Loader/>}
            {tickets.map((i) => (
                <div key={i.price} className={classes.ticket}>
                    <HeaderTicket logo={i.carrier} price={i.price}/>
                    <div className={classes["ticket__about"]}>
                        <CityWay item={i}/>
                        <TimeWay item={i}/>
                        <TransferWay item={i}/>
                    </div>
                </div>
            ))}
            <ShowButton/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    searchId: state.tickets.searchId,
    tickets: state.tickets.tickets,
    isLoad: state.tickets.isLoad,
});

export default connect(mapStateToProps, actions)(Ticket);
