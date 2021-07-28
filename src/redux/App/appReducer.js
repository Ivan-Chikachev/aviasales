import {ERROR_SERVER} from "../types";

const initialState = {
    isError: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_SERVER:
            return {...state, isError: true}
        default:
            return state
    }
}
