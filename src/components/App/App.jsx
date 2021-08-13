import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import classes from './App.module.scss';
import TransferParams from '../TransferFilter/TransferFilter';
import TicketSort from '../TicketSort/TicketSort';
import Ticket from '../Ticket/TicketList';
import * as actions from '../../redux/Tickets/ticketsActions';
import Error from '../Error/Error';
import Logo from '../Logo/Logo';
import Loader from '../Loader/Loader';

const App = ({
                 isError, searchId, getSearchId, getTicketsStart, getTicketsEnd, stop, ticketsEnd, isLoad,
             }) => {

    useEffect(() => {
        getSearchId();
    }, []);

    useEffect(() => {
        if (searchId) getTicketsStart(searchId);
    }, [searchId]);

    useEffect(() => {
        if (searchId && !stop) {
            getTicketsEnd(searchId);
        }
    }, [searchId, ticketsEnd]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <Logo/>
                <div className={classes['loader-container']}>
                    {isLoad && <Loader/>}
                </div>
                {isError
                    ? <Error/>
                    : (
                        <div className={classes['block-grid']}>
                            <TransferParams/>
                            <TicketSort/>
                            <Ticket/>
                        </div>
                    )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isError: state.tickets.isError,
    searchId: state.tickets.searchId,
    stop: state.tickets.stop,
    ticketsEnd: state.tickets.ticketsEnd,
    isLoad: state.tickets.isLoad,
});

export default connect(mapStateToProps, actions)(App);
