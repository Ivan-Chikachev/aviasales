import {
    ERROR_SERVER, GET_SEARCH_ID, GET_TICKETS_START, GET_TICKETS_END, OFF_LOADING,
} from '../types';
import ticketAPI from '../../api/api';
import {
    TicketsType,
    GetTicketsStartACType,
    GetTicketsEndACType,
    GetSearchIdACType,
    ErrorServerACType,
    OffLoadingACType,
    ActionsTicketsTypes
} from '../../types/types';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../rootReducer";


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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTicketsTypes>

export const getTicketsStart = (searchId: string): ThunkType =>

    async (dispatch) => {
        try {
            const res = await ticketAPI.getTickets(searchId);
            const action = getTicketsStartAC(res.data.tickets);
            dispatch(action);

        } catch (e) {
            if (e.response.status === 500) {
                dispatch(getTicketsStart(searchId))
            } else {
                dispatch(errorServerAC());
            }
        }
    };

export const getTicketsEnd = (searchId: string): ThunkType =>

    async (dispatch) => {
        try {
            const res = await ticketAPI.getTickets(searchId);
            const action = getTicketsEndAC(res.data.tickets)

            if (!res.data.stop) {
                dispatch(action);
            } else {
                dispatch(offLoadingAC());
            }

        } catch (e) {
            if (e.response.status === 500) {
                dispatch(getTicketsEnd(searchId))
            } else {
                dispatch(errorServerAC());
            }
        }
    };

export const getSearchId = (): ThunkType => async (dispatch) => {
    try {
        const res = await ticketAPI.getSearchId();
        dispatch(getSearchIdAC(res.data.searchId));

    } catch (e) {
        dispatch(errorServerAC());
    }
};
