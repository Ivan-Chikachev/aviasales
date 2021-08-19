import axios from 'axios';
import {TicketsType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/',
    headers: {
        'Content-Type': 'application/json',
    },
});

type SearchIdResponseType = {
    searchId: string
}

type GetTicketsResponseType = {
    stop: boolean
    tickets: Array<TicketsType>
}


const ticketAPI = {
    getSearchId() {
        return instance
            .get<SearchIdResponseType>('search');
    },
    getTickets(searchId: string) {
        return instance
            .get<GetTicketsResponseType>(`tickets?searchId=${searchId}`);
    },
};

export default ticketAPI;
