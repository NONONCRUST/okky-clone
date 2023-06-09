"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { PropsWithChildren } from "react"

const queryClient = new QueryClient()

const ReactQuery: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQuery
