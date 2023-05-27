"use client"

import clsx from "clsx"
import React from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input: React.FC<Props> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "w-full px-3 py-2 text-sm border rounded-md shadow-sm appearance-none border-gray-500/30 placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base",
        className
      )}
      {...props}
    />
  )
}

export default Input
