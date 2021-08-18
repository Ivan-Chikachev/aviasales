import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/',
    headers: {
        'Content-Type': 'application/json',
    },
});

const ticketAPI = {
    _searchId: null,

    getSearchId() {
        return instance
            .get('search');
    },
    getTickets(id) {
        return instance
            .get(`tickets?searchId=${id}`);
    },
};

export default ticketAPI;
