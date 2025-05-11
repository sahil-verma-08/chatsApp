import axios from "axios";
export const axiosInstance=axios.create({
    baseURL:import.meta.env.MODE==="devlopment"? "http://localhost:9000/api": "/api",
    withCredentials:true,
})