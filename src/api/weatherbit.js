import axios from 'axios';

export const weatherbit = axios.create({
    baseURL : "https://api.weatherbit.io/v2.0/current"
})
