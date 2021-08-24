import {ActionSortType, SortType} from "../../types/types";

const initialState = {
    sortTabs: [
        {label: 'cамый дешевый', id: 'cheapest'},
        {label: 'самый быстрый', id: 'fastest'},
        {label: 'оптимальный', id: 'optimal'},
    ] as Array<SortType>,
    activeSortTab: 'cheapest',
};

type InitialStateType = typeof initialState

export const sortReducer = (state = initialState, action: ActionSortType): InitialStateType => {
    switch (action.type) {
        case "CHANGE_SORT_ID":
            return {...state, activeSortTab: action.sortId}
        default:
            return state
    }
}
