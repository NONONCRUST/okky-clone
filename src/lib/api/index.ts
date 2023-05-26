import BASE_URL from "@/lib/constants/api"
import axios from "axios"

export const axiosInstace = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? BASE_URL.PROD : BASE_URL.DEV,
})
