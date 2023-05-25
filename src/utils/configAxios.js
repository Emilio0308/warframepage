import axios from "axios";

export const axiosWarframe = axios.create({
    baseURL: "https://api.warframestat.us/"
})