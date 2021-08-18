import {CHANGE_SORT_ID} from "../types";
import {ChangeSortIdType} from "../../types/types";

export const changeSortId = (id: string): ChangeSortIdType => ({
    type: CHANGE_SORT_ID,
    sortId: id
})
