"use client"

import clsx from "clsx"
import Image from "next/image"
import React from "react"

interface Props {
  src?: string | null
  alt?: string
  size?: number
  onClick?: () => void
}

const Avatar: React.FC<Props> = ({
  src,
  alt = "avatar",
  size = 16,
  onClick,
}) => {
  return (
    <>
      {src && (
        <Image
          className={clsx("rounded-full", onClick && "cursor-pointer")}
          src={src}
          width={size}
          height={size}
          onClick={onClick}
          alt={alt}
        />
      )}
      {!src && (
        <div
          className={clsx(
            "bg-gray-100 rounded-full",
            `w-[${size}px] h-[${size}px]`
          )}
        />
      )}
    </>
  )
}

export default Avatar
