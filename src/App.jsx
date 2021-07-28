import React, { useEffect, useState } from 'react';
import './App.scss';
import Logo from './components/Logo/Logo';
import TransferParams from './components/TransferParams/TransferParams';
import TicketOption from './components/TicketOption/TicketOption';
import Ticket from './components/Ticket/Ticket';
import ShowButton from './components/ShowButton/ShowButton';
import ticketAPI from './api/api';

const App = () => {
    const [searchId, setSearchId] = useState('');
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        ticketAPI.getSearchId()
            .then((i) => {
                setSearchId(i.data.searchId);
            });
    }, []);

    useEffect(() => {
        ticketAPI.getTickets(searchId)
            .then((i) => {
                const arr = i.data.tickets;
                const arrn = arr.slice(0, 5);
                setTickets(arrn);
            });
    }, [searchId]);

    return (
        <div className="wrapper">
            <div className="container">
                <Logo />
                <div className="block-grid">
                    <TransferParams />
                    <TicketOption />
                    <Ticket tickets={tickets} searchId={searchId} />
                    <ShowButton />
                </div>
            </div>
        </div>
    );
};

export default App;
