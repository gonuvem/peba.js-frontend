import Axios from 'axios';

const API = Axios.create({
    baseURL: process.env.NODE_ENV === 'production'
    ? 'https://peba-api-dev.herokuapp.com/'
    : 'https://peba-api-staging.herokuapp.com/',
    headers: {
        'accept': 'application/json',
        'content-type': 'text/plain'
    }
});

export default API;