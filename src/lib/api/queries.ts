import { fetchTest } from "@/lib/api/test"
import { useQuery } from "@tanstack/react-query"

export const useTestQuery = () => useQuery(["test"], fetchTest)
