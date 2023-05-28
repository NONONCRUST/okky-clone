"use client"

import Link from "next/link"
import React from "react"

interface Props {
  children: React.ReactNode
  href: string
}

const LinkText: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      className="text-sm text-blue-500 underline hover:text-blue-600"
      href={href}
    >
      {children}
    </Link>
  )
}

export default LinkText
