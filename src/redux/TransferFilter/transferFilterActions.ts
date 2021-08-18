import {CHANGE_FILTER} from '../types';
import {ChangeFilterType} from "../../types/types";

export const changeFilter = (id = 10): ChangeFilterType => (
    {
        type: CHANGE_FILTER,
        id
    }
)
