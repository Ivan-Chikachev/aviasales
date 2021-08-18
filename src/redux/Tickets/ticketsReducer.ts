import {
 ERROR_SERVER, GET_SEARCH_ID, GET_TICKETS_START, GET_TICKETS_END, OFF_LOADING,
} from '../types';
import {
    ActionsTicketsTypes,
    TicketsType
} from "../../types/types";

const initialState = {
    ticketsStart: [] as Array<TicketsType>,
    ticketsEnd: [] as Array<TicketsType>,
    searchId: '',
    isLoad: true,
    isError: false,
};

type InitialStateType = typeof initialState

export const ticketsReducer = (state = initialState, action: ActionsTicketsTypes): InitialStateType => {
    switch (action.type) {
        case GET_TICKETS_START:
            return {
                ...state, ticketsStart: action.tickets,
            };
        case GET_TICKETS_END:
            return {
                ...state, ticketsEnd: [...state.ticketsEnd, ...action.tickets],
            };
        case GET_SEARCH_ID:
            return { ...state, searchId: action.payload };
        case OFF_LOADING:
            return { ...state, isLoad: false};
        case ERROR_SERVER:
            return { ...state, isError: true, isLoad: false };
        default:
            return state;
    }
}
