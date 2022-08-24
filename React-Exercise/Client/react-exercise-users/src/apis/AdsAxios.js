import axios from 'axios';

var AdsAxios = axios.create({
    baseURL: 'https://localhost:44340/api',
});

export default AdsAxios;