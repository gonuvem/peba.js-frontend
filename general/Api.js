import Axios from 'axios';

const API = Axios.create({
    baseURL: 'http://peba-api-dev.herokuapp.com/',
});

export default API;