import clsx from "clsx"
import React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "contained" | "outlined"
}

const buttonStyle = {
  contained: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
  outlined:
    "border bg-white text-gray-900 shadow-sm hover:bg-gray-100 border-gray-500/30 dark:hover:bg-gray-600 dark:border-gray-500/70 dark:bg-gray-700 dark:text-gray-100",
}

const HeaderButton: React.FC<Props> = ({
  children,
  variant = "contained",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "hidden h-[35px] w-[85px] items-center justify-center rounded-3xl border text-center text-xs font-medium  focus:outline-none sm:flex",
        buttonStyle[variant]
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default HeaderButton
