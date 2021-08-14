import {CHANGE_FILTER} from '../types';
import {ChangeFilterType} from "./transferFilterActions";

type ParamsType = {
    label: string,
    id: number,
    status: boolean
}

type InitialStateType = Array<ParamsType>

const initialState = [
    {
        label: 'Все',
        id: 10,
        status: true,
    },
    {
        label: 'Без пересадок',
        id: 0,
        status: true,
    },
    {
        label: '1 пересадка',
        id: 1,
        status: true,
    },
    {
        label: '2 пересадки',
        id: 2,
        status: true,
    },
    {
        label: '3 пересадки',
        id: 3,
        status: true,
    },
];

export const transferFilterReducer = (state = initialState, action: ChangeFilterType): InitialStateType => {
    switch (action.type) {
        case CHANGE_FILTER:
            if (action.id === 10 && state.find((i: ParamsType) => i.id === 10)?.status) {
                return state.map((i) => {
                    i.status = false;
                    return i;
                });
            }

            if (action.id === 10) {
                return state.map((i) => {
                    i.status = true;
                    return i;
                });
            }

            return state.map((i: ParamsType) => {
                if (i.id === action.id) {
                    const paramsAll = state.find((i: ParamsType) => i.id === 10)
                    paramsAll ? paramsAll.status = false : null
                    i.status = !i.status;
                }
                return i;
            });
        default:
            return state;
    }
};
