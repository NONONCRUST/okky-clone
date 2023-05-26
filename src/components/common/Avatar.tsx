import clsx from "clsx"
import Image from "next/image"
import React from "react"

interface Props {
  src: string
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
    <Image
      className={clsx("rounded-full", onClick && "cursor-pointer")}
      src={src}
      width={size}
      height={size}
      onClick={onClick}
      alt={alt}
    />
  )
}

export default Avatar
