import axios from "axios";

const API = axios.create({
    baseURL: "https://smartcrm-marketing-automation-2.onrender.com/api"
});

export default API;
