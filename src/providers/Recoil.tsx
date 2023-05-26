"use client"

import React, { PropsWithChildren } from "react"
import { RecoilRoot } from "recoil"

const Recoil: React.FC<PropsWithChildren> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default Recoil
