import {ERROR_SERVER, GET_SEARCH_ID, GET_TICKETS} from "../types";

const initialState = {
    tickets: [],
    searchId: '',
    isLoad: true,
    isError: false
}

export const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKETS:
            return {...state, tickets: action.payload, isLoad: false, isError: false}
        case GET_SEARCH_ID:
            return {...state, searchId: action.payload, isError: false}
        case ERROR_SERVER:
            return {...state, isError: true, isLoad: false}
        default:
            return state
    }
}
