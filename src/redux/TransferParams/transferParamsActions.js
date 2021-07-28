import {
    CHANGE_PARAMS_ALL,
    CHANGE_PARAMS_NULL,
    CHANGE_PARAMS_ONE,
    CHANGE_PARAMS_THREE,
    CHANGE_PARAMS_TWO, CHOOSE_ALL_PARAMS,
} from '../types';

export const changeParamsAll = (payload) => ({ type: CHANGE_PARAMS_ALL, payload });
export const changeParamsNull = () => ({ type: CHANGE_PARAMS_NULL });
export const changeParamsOne = () => ({ type: CHANGE_PARAMS_ONE });
export const changeParamsTwo = () => ({ type: CHANGE_PARAMS_TWO });
export const changeParamsThree = () => ({ type: CHANGE_PARAMS_THREE });
export const chooseAllParams = () => ({ type: CHOOSE_ALL_PARAMS });
