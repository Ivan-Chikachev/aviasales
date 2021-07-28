import React from 'react';
import classes from './App.module.scss';
import TransferParams from '../TransferParams/TransferParams';
import TicketOption from '../TicketOption/TicketOption';
import Ticket from '../Ticket/Ticket';
import {connect} from "react-redux";
import * as actions from "../../redux/App/appActions";
import Error from "../Error/Error";
import Logo from "../Logo/Logo";

const App = ({isError}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <Logo/>
                {isError ?
                    <Error/>
                    :
                    <div className={classes['block-grid']}>
                        <TransferParams/>
                        <TicketOption/>
                        <Ticket/>
                    </div>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isError: state.tickets.isError
});

export default connect(mapStateToProps, actions)(App);
