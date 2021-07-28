import {
    CHANGE_PARAMS_ALL,
    CHANGE_PARAMS_NULL,
    CHANGE_PARAMS_ONE,
    CHANGE_PARAMS_THREE,
    CHANGE_PARAMS_TWO,
    CHOOSE_ALL_PARAMS,
} from '../types';

const initialState = {
    paramsAll: false,
    paramsTransferNull: false,
    paramsTransferOne: false,
    paramsTransferTwo: false,
    paramsTransferThree: false,
};

export const transferParamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PARAMS_ALL:
            return {
                ...state,
paramsAll: action.payload,
                paramsTransferNull: action.payload,
paramsTransferOne: action.payload,
                paramsTransferTwo: action.payload,
paramsTransferThree: action.payload,
            };
        case CHANGE_PARAMS_NULL:
            return { ...state, paramsTransferNull: !state.paramsTransferNull };
        case CHANGE_PARAMS_ONE:
            return { ...state, paramsTransferOne: !state.paramsTransferOne };
        case CHANGE_PARAMS_TWO:
            return { ...state, paramsTransferTwo: !state.paramsTransferTwo };
        case CHANGE_PARAMS_THREE:
            return { ...state, paramsTransferThree: !state.paramsTransferThree };
        case CHOOSE_ALL_PARAMS:
            if (state.paramsTransferThree
                && state.paramsTransferTwo
                && state.paramsTransferOne
                && state.paramsTransferNull) {
                return { ...state, paramsAll: true };
            }
            return { ...state, paramsAll: false };
        default:
            return state;
    }
};
