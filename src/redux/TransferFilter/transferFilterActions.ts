import {CHANGE_FILTER} from '../types';

export type ChangeFilterType = {
    type: typeof CHANGE_FILTER,
    id: string
}

export const changeFilter = (id = "all"): ChangeFilterType => {

    return (
        {
            type: CHANGE_FILTER,
            id
        }
    )
