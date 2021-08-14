import { SortType } from "../../types/types";
import {CHANGE_SORT_ID} from "../types";
import {ChangeSortIdType} from "./sortActions";


const initialState = {
    sortTabs: [
        {label: 'cамый дешевый', id: 'cheapest'},
        {label: 'самый быстрый', id: 'fastest'},
        {label: 'оптимальный', id: 'optimal'},
    ] as Array<SortType>,
    activeSortTab: 'all',
};

type InitialStateType = typeof initialState

export const sortReducer = (state = initialState, action: ChangeSortIdType): InitialStateType => {
    switch (action.type) {
        case CHANGE_SORT_ID:
            return {...state, activeSortTab: action.sortId}
        default:
            return state
    }
}
