import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux/rootReducer";
import { ticketsActions } from "../redux/Tickets/ticketsActions";
import {filterActions} from "../redux/TransferFilter/transferFilterActions";
import {sortActions} from "../redux/Sort/sortActions";

// General

type PropType<T> = T extends { [key: string]: infer U } ? U : never

type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropType<T>>

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

export type ActionsTicketsType = InferActionsType<typeof ticketsActions>

export type ThunkTicketsType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTicketsType>

// Transfer Filter types

export type ParamsType = {
    label: string,
    id: number,
    status: boolean
}

export type ActionFilterType = InferActionsType<typeof filterActions>

// Sort types

export type SortType = {
    label: string,
    id: string
}

export type ActionSortType = InferActionsType<typeof sortActions>

