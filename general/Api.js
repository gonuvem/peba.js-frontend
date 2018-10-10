import Axios from 'axios';

const API = Axios.create({
    baseURL: 'endereço da API aqui',
    headers: {
        'accept': 'application/json',
        'content-type': 'text/plain'
    }
});

export default API;