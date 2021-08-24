import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import classes from './Ticket.module.scss';
import ShowButton from '../ShowButton/ShowButton';
import TicketItem from './TicketItem/TicketItem';
import {ParamsType, TicketsType} from "../../types/types";
import {AppStateType} from "../../redux/rootReducer";

type StateType = {
    initialTickets: Array<TicketsType>
    activeSortTab: string
    transferFilter: Array<ParamsType>
}

type PropTypes = StateType

const TicketList: React.FC<PropTypes> = ({initialTickets, activeSortTab, transferFilter}) => {

    const [showItemCount, addShowItemCount] = useState(5);
    const [currentTickets, setCurrentTickets] = useState<Array<TicketsType>>([]);
    const [tickets, setTickets] = useState<Array<TicketsType>>([]);
    const [stop, setStop] = useState<Array<number>>([]);

    // Сортировка билетов
    useEffect(() => {

        if (activeSortTab === 'cheapest') setTickets(initialTickets.sort((a, b) => a.price - b.price));

        if (activeSortTab === 'fastest') {
            setTickets(initialTickets.sort((a, b) => a.segments[0].duration + a.segments[1].duration
                - (b.segments[0].duration + b.segments[1].duration)));
        }

        if (activeSortTab === 'optimal') {
            setTickets(initialTickets.sort((a, b) => a.segments[0].duration + a.segments[1].duration + a.price
                - (b.segments[0].duration + b.segments[1].duration + b.price)));
        }
    }, [activeSortTab, initialTickets]);

    // Добавление в массив id активных фильтров
    useEffect(() => {
        const filterStop = transferFilter.reduce((acc: Array<number>, i) => {
            if (i.status === true) {
                acc.push(i.id);
            }
            return acc;
        }, []);
        setStop(filterStop);
    }, [initialTickets]);

    // Фильтрация билетов
    useEffect(() => {
        const filterTicketsByForward = tickets.filter((i) => (stop.includes(i.segments[0].stops.length)));
        const filterTicketsByBack = filterTicketsByForward.filter((i) => (stop.includes(i.segments[1].stops.length)));
        setTickets(filterTicketsByBack);
    }, [stop]);

    // Обрезка массива билетов
    useEffect(() => {
        setCurrentTickets(tickets.slice(0, showItemCount));
    }, [showItemCount, tickets]);

    const onShowClick = () => {
        addShowItemCount((i) => i + 5);
    };

    return (
        <div className={classes['ticket-container']}>
            {tickets.length
                ?
                currentTickets.map((i) => (
                    <TicketItem key={i.price + i.carrier} item={i}/>
                ))
                :
                <div>Рейсов, подходящих под заданные фильтры, не найдено</div>}

            {tickets.length > 5 ? <ShowButton onShowClick={onShowClick}/> : null}
        </div>
    );
};

const mapStateToProps = (state: AppStateType): StateType => ({
    initialTickets: [
        ...state.tickets.ticketsStart,
        ...state.tickets.ticketsEnd,
    ],
    activeSortTab: state.sort.activeSortTab,
    transferFilter: state.transferFilter
});

export default connect<StateType, {}, {}, AppStateType>(mapStateToProps, {})(TicketList);
