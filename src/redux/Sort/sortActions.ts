import {CHANGE_SORT_ID} from "../types";

export type ChangeSortIdType = {
    type: typeof CHANGE_SORT_ID,
    sortId: string
}

export const changeSortId = (id: string) => ({
    type: CHANGE_SORT_ID,
    sortId: id
})
