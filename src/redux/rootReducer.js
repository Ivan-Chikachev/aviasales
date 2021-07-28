import { combineReducers } from 'redux';
import { transferParamsReducer } from './TransferParams/transferParamsReducer';

export const rootReducer = combineReducers({
    transferParams: transferParamsReducer,
});
