import {CHANGE_FILTER} from '../types';
import {ChangeFilterType} from "./transferFilterActions";

type ParamsType = {
    label: string,
    id: string,
    status: boolean
}

type InitialStateType = Array<ParamsType>

const initialState = [
    {
        label: 'Все',
        id: 'all',
        status: true,
    },
    {
        label: 'Без пересадок',
        id: 'null',
        status: true,
    },
    {
        label: '1 пересадка',
        id: 'one',
        status: true,
    },
    {
        label: '2 пересадки',
        id: 'two',
        status: true,
    },
    {
        label: '3 пересадки',
        id: 'three',
        status: true,
    },
];

export const transferFilterReducer = (state = initialState, action: ChangeFilterType): InitialStateType => {
    switch (action.type) {
        case CHANGE_FILTER:
            if (action.id === 'all' && state.find((i: ParamsType) => i.id === 'all')?.status) {
                return state.map((i) => {
                    i.status = false;
                    return i;
                });
            }

            if (action.id === 'all') {
                return state.map((i) => {
                    i.status = true;
                    return i;
                });
            }

            return state.map((i: ParamsType) => {
                if (i.id === action.id) {
                    const paramsAll = state.find((i: ParamsType) => i.id === 'all')
                    paramsAll ? paramsAll.status = false : null
                    i.status = !i.status;
                }
                return i;
            });
        default:
