import {
    ERROR_SERVER, GET_SEARCH_ID, GET_TICKETS_START, GET_TICKETS_END, OFF_LOADING,
} from '../types';
import ticketAPI from '../../api/api';

type GetTicketsStartACType = {
    type: typeof GET_TICKETS_START,
    tickets: Array<{}>
}
type GetTicketsEndACType = {
    type: typeof GET_TICKETS_END,
    tickets: Array<{}>
}
type GetSearchIdACType = {
    type: typeof GET_SEARCH_ID,
    payload: string
}
type ErrorServerACType = {
    type: typeof ERROR_SERVER
}
type OffLoadingACType = {
    type: typeof OFF_LOADING
}

const getTicketsStartAC = (tickets: Array<{}>) => ({
    type: GET_TICKETS_START,
    tickets
})

const getTicketsEndAC = (tickets: Array<{}>) => ({
    type: GET_TICKETS_END,
    tickets
})

const getSearchIdAC = (payload: string) => ({
    type: GET_SEARCH_ID,
    payload
})

const errorServerAC = () => ({
    type: ERROR_SERVER
})

const offLoadingAC = () => ({
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
