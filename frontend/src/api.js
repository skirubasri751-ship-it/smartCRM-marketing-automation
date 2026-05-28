import axios from "axios";

const API = axios.create({
    baseURL: "https://smart-crm-marketing-automation.vercel.app/api"
});

export default API;