import {
    ERROR_SERVER, GET_SEARCH_ID, GET_TICKETS_START, GET_TICKETS_END, OFF_LOADING,
} from '../types';
import ticketAPI from '../../api/api';
import {
    TicketsType, GetTicketsStartACType, GetTicketsEndACType, GetSearchIdACType, ErrorServerACType, OffLoadingACType
} from '../../types/types';


const getTicketsStartAC = (tickets: Array<TicketsType>): GetTicketsStartACType => ({
    type: GET_TICKETS_START,
    tickets
})

const getTicketsEndAC = (tickets: Array<TicketsType>): GetTicketsEndACType => ({
    type: GET_TICKETS_END,
    tickets
})

const getSearchIdAC = (payload: string): GetSearchIdACType => ({
    type: GET_SEARCH_ID,
    payload
})

const errorServerAC = (): ErrorServerACType => ({
    type: ERROR_SERVER
})

const offLoadingAC = (): OffLoadingACType => ({
    type: OFF_LOADING
})


export const getTicketsStart = (searchId: string) => async (dispatch: any) => {
    let action = {};

    try {
        const dataTickets = await ticketAPI.getTickets(searchId);
        action = getTicketsStartAC(dataTickets.data.tickets);

        if (!dataTickets.data.stop) {
            dispatch(action);
        }
    } catch (e) {
        dispatch(getTicketsStart(searchId));
    }
};

export const getTicketsEnd = (searchId: string) => async (dispatch: any) => {
    let action = {};

    try {
        const dataTickets = await ticketAPI.getTickets(searchId);

        action = getTicketsEndAC(dataTickets.data.tickets)

        if (!dataTickets.data.stop) {
            dispatch(action);
        } else {
            dispatch(offLoadingAC());
        }
    } catch (e) {
        dispatch(getTicketsEnd(searchId));
    }
};

export const getSearchId = () => async (dispatch: any) => {
    try {
        const res = await ticketAPI.getSearchId();
        dispatch(getSearchIdAC(res.data.searchId));
    } catch (e) {
        dispatch(errorServerAC());
    }
};
