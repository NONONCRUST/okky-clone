import { axiosInstace } from "@/lib/api"

export const fetchTest = async () => {
  const response = await axiosInstace.get("/test")
  return response.data
}
