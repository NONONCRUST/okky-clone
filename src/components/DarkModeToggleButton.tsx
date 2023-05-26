"use client"

import { Switch } from "@headlessui/react"
import clsx from "clsx"
import { useState } from "react"

const DarkModeToggleButton: React.FC = () => {
  const [checked, setChecked] = useState(false)

  const toggleChecked = () => setChecked((prev) => !prev)

  return (
    <Switch
      checked={checked}
      onChange={toggleChecked}
      className={clsx(
        checked ? "bg-gray-700" : "bg-blue-500",
        "items-center relative inline-flex h-8 w-14 sm:h-6 sm:w-11 cursor-pointer rounded-full"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={clsx(
          checked
            ? "translate-x-7 sm:translate-x-[22px]"
            : "translate-x-1 sm:translate-x-0.5",
          "pointer-events-none inline-block h-6 w-6 sm:h-5 sm:w-5 transform rounded-full bg-white transition"
        )}
      />
    </Switch>
  )
}

export default DarkModeToggleButton
