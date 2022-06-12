import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://rohanpersonalblog.herokuapp.com/api/",
});
