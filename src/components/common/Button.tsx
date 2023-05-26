import React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "contained" | "outlined" | "text"
}

const Button: React.FC<Props> = ({
  variant = "contained",
  children,
  ...props
}) => {
  return (
    <button className="p-2 px-4 text-white bg-blue-500 rounded-lg" {...props}>
      {children}
    </button>
  )
}

export default Button
