import {combineReducers} from 'redux';
import {transferFilterReducer} from './TransferFilter/transferFilterReducer';
import {ticketsReducer} from './Tickets/ticketsReducer';
import {sortReducer} from './Sort/sortReducer';

export const rootReducer = combineReducers({
    transferFilter: transferFilterReducer,
    tickets: ticketsReducer,
    sort: sortReducer,
});

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
