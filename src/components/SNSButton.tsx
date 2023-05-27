"use client"

import Icon from "@/components/common/Icon"
import SRC from "@/lib/constants/asset"
import { signIn } from "next-auth/react"
import React from "react"

const src = {
  google: SRC.ICONS.GOOGLE,
  kakao: SRC.ICONS.KAKAO,
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "google" | "kakao"
}

const SNSButton: React.FC<Props> = ({ variant }) => {
  return (
    <button
      className="inline-flex justify-center w-full px-4 py-2 text-gray-700 border rounded-md shadow-sm border-gray-500/30 hover:border-gray-500 dark:bg-gray-700 dark:text-gray-300"
      onClick={() => signIn(variant)}
    >
      <Icon size={20} src={src[variant]} />
    </button>
  )
}

export default SNSButton
