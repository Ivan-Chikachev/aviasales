import ticketAPI from '../../api/api';
import {
    ThunkTicketsType,
    TicketsType,
} from '../../types/types';


export const ticketsActions = {
    getTicketsStart: (tickets: Array<TicketsType>) => ({
        type: 'GET_TICKETS_START',
        tickets
    } as const),

    getTicketsEnd: (tickets: Array<TicketsType>) => ({
        type: 'GET_TICKETS_END',
        tickets
    } as const),

    getSearchId: (payload: string) => ({
        type: 'GET_SEARCH_ID',
        payload
    } as const),

    errorServer: () => ({
        type: 'ERROR_SERVER'
    } as const),

    offLoading: () => ({
        type: 'OFF_LOADING'
    } as const)
}

export const getTicketsStart = (searchId: string): ThunkTicketsType =>

    async (dispatch) => {
        try {
            const res = await ticketAPI.getTickets(searchId);
            const action = ticketsActions.getTicketsStart(res.data.tickets);
            dispatch(action);

        } catch (e) {
            if (e.response.status === 500) {
                dispatch(getTicketsStart(searchId))
            } else {
                dispatch(ticketsActions.errorServer());
            }
        }
    };

export const getTicketsEnd = (searchId: string): ThunkTicketsType =>

    async (dispatch) => {
        try {
            const res = await ticketAPI.getTickets(searchId);
            const action = ticketsActions.getTicketsEnd(res.data.tickets)

            if (!res.data.stop) {
                dispatch(action);
            } else {
                dispatch(ticketsActions.offLoading());
            }

        } catch (e) {
            if (e.response.status === 500) {
                dispatch(getTicketsEnd(searchId))
            } else {
                dispatch(ticketsActions.errorServer());
            }
        }
    };

export const getSearchId = (): ThunkTicketsType => async (dispatch) => {
    try {
        const res = await ticketAPI.getSearchId();
        dispatch(ticketsActions.getSearchId(res.data.searchId));

    } catch (e) {
        dispatch(ticketsActions.errorServer());
    }
};
