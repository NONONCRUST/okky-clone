"use client"

import Image from "next/image"
import React from "react"

interface Props {
  className?: string
  src: string
  alt?: string
  size?: number
}

const Icon: React.FC<Props> = ({ className, src, alt = "", size = 24 }) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  )
}

export default Icon
