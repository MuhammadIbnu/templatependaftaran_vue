import axios from 'axios';

const Api = axios.create({
    // set default end point api
    baseURL: ""
})

export default Api