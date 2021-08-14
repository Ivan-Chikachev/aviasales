import {ERROR_SERVER, GET_SEARCH_ID, GET_TICKETS_END, GET_TICKETS_START, OFF_LOADING} from "../redux/types";

// Tickets types
export type SegmentsTicketType = {
    origin: string
    destination: string
    date: string
    stops: Array<string>
    duration: number
}
export type TicketsType = {
    price: number
    carrier: string
    segments: Array<SegmentsTicketType>
}
export type GetTicketsStartACType = {
    type: typeof GET_TICKETS_START,
    tickets: Array<TicketsType>
}
export type GetTicketsEndACType = {
    type: typeof GET_TICKETS_END,
    tickets: Array<TicketsType>
}
export type GetSearchIdACType = {
    type: typeof GET_SEARCH_ID,
    payload: string
}
export type ErrorServerACType = {
    type: typeof ERROR_SERVER
}
export type OffLoadingACType = {
    type: typeof OFF_LOADING
}

// Transfer Params types

export type ParamsType = {
    label: string,
    id: number,
    status: boolean
}

// Sort types

export type SortType = {
    label: string,
    id: string
}

