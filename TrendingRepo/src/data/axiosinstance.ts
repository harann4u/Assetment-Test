import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "https://api.github.com/",
      timeout: 10000,

})