import {ERROR_SERVER, GET_SEARCH_ID, GET_TICKETS} from "../types";
import ticketAPI from "../../api/api";

export const getTickets = (searchId) => {
    return (dispatch) => {
        ticketAPI.getTickets(searchId)
            .then((i) => {
                const arr = i.data.tickets;
                const arrn = arr.slice(0, 5);
                dispatch({type: GET_TICKETS, payload: arrn})
            })
            .catch(() => dispatch({type: ERROR_SERVER}))
    }
}

export const getSearchId = () => {
    return (dispatch) => {
        ticketAPI.getSearchId()
            .then((i) => {
                dispatch({type: GET_SEARCH_ID, payload: i.data.searchId});
            })
            .catch(() => dispatch({type: ERROR_SERVER}))
    }
}
