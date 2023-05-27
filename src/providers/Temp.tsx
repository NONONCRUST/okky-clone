"use client"

import React, { PropsWithChildren } from "react"

const Temp: React.FC<PropsWithChildren> = ({ children }) => {
  if (document.body.getAttribute("style") === "") {
    document.body.removeAttribute("style")
  }

  return <>{children}</>
}

export default Temp
