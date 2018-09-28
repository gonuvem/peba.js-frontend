import Axios from 'axios';

const API = Axios.create({
    baseURL: 'https://peba-api-dev.herokuapp.com/',
    headers: {
        'accept': 'application/json',
        'content-type': 'text/plain'
    }
});

export default API;