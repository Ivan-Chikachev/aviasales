import {combineReducers} from 'redux';
import {transferParamsReducer} from './TransferParams/transferParamsReducer';
import {ticketsReducer} from './Tickets/ticketsReducer';
import {appReducer} from "./App/appReducer";

export const rootReducer = combineReducers({
    transferParams: transferParamsReducer,
    tickets: ticketsReducer,
    app: appReducer
});
