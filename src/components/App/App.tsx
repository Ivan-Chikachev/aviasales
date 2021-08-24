import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import classes from './App.module.scss';
import TransferParams from '../TransferFilter/TransferFilter';
import TicketSort from '../Sort/Sort';
import TicketList from '../Ticket/TicketList';
import * as actions from '../../redux/Tickets/ticketsActions';
import Error from '../Error/Error';
import Logo from '../Logo/Logo';
import Loader from '../Loader/Loader';
import {TicketsType} from "../../types/types";
import {AppStateType} from "../../redux/rootReducer";

type StateTypes = {
    isError: boolean
    searchId: string
    ticketsEnd: Array<TicketsType>
    isLoad: boolean
}

type DispatchTypes = {
    getSearchId: () => void
    getTicketsStart: (searchId: string) => void
    getTicketsEnd: (searchId: string) => void
}

type PropTypes = StateTypes & DispatchTypes

const App: React.FC<PropTypes> = ({
                                      isError, searchId,
                                      getSearchId, getTicketsStart,
                                      getTicketsEnd, ticketsEnd,
                                      isLoad,
                                  }) => {
    useEffect(() => {
        getSearchId();
    }, []);

    useEffect(() => {
        if (searchId) getTicketsStart(searchId);
    }, [searchId]);

    useEffect(() => {
        if (searchId) {
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
                    ?
                    <Error/>
                    : (
                        <div className={classes['block-grid']}>
                            <TransferParams/>
                            <TicketSort/>
                            <TicketList/>
                        </div>
                    )}
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): StateTypes => ({
    isError: state.tickets.isError,
    searchId: state.tickets.searchId,
    ticketsEnd: state.tickets.ticketsEnd,
    isLoad: state.tickets.isLoad,
});

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, actions)(App);
