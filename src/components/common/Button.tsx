import clsx from "clsx"
import React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "contained" | "outlined" | "text"
}

const Button: React.FC<Props> = ({
  variant = "contained",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "w-full p-2 px-4 text-white bg-blue-500 rounded-md text-sm hover:bg-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
