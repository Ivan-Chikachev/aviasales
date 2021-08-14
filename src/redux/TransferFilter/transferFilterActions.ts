import {CHANGE_FILTER} from '../types';

export type ChangeFilterType = {
    type: typeof CHANGE_FILTER,
    id: number
}

export const changeFilter = (id = 10): ChangeFilterType => (
    {
        type: CHANGE_FILTER,
        id
    }
)