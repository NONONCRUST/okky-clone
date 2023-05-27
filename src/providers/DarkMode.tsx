"use client"

import { ThemeProvider } from "next-themes"
import React, { PropsWithChildren } from "react"

const DarkMode: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default DarkMode
