import SRC from "@/lib/constants/asset"
import Image from "next/image"
import React from "react"

const HeaderInput: React.FC = () => {
  return (
    <div className="w-40 lg:w-[235px]">
      <div className="flex h-[35px] items-center rounded-[43px] border border-gray-300 py-0 transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-700 dark:bg-gray-700">
        <button className="-my-0.5 -mr-1.5 flex h-8 w-8 flex-shrink-0 items-center justify-center transition duration-300">
          <span className="sr-only">Search Bar</span>
          <div className="h-3.5 w-3.5 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-200 relative">
            <Image
              src={SRC.ICONS.SEARCH}
              alt="Search Icon"
              fill
              className="text-red-500"
            />
          </div>
        </button>
        <input
          type="text"
          placeholder="검색"
          className="w-full p-0 pr-2 text-sm font-normal bg-transparent border-none placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0"
          name="search-input"
        />
      </div>
    </div>
  )
}

export default HeaderInput
