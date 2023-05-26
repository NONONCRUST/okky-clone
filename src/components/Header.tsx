"use client"

import DarkModeToggleButton from "@/components/DarkModeToggleButton"
import HeaderButton from "@/components/HeaderButton"
import HeaderInput from "@/components/HeaderInput"
import HeaderLogo from "@/components/HeaderLogo"
import NAVIGATIONS from "@/lib/constants/navigation"
import Link from "next/link"
import React from "react"

const Header: React.FC = () => {
  const IS_LOGGED_IN = true

  return (
    <header
      className="sticky top-0 z-20 flex items-center h-16 py-5 text-sm font-medium leading-6 bg-white border-b border-b-gray-500/30 dark:border-b-gray-500/70 dark:bg-gray-800"
      data-testid="header"
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-end w-full gap-8 px-4 mx-auto max-w-7xl"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <HeaderLogo />
            <div className="ml-3 hidden items-center space-x-7 md:flex lg:ml-[105px]">
              {NAVIGATIONS.map((nav) => (
                <Link
                  key={nav.name}
                  href={nav.path}
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 hover:no-underline"
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-8">
            <HeaderInput />
            <DarkModeToggleButton />
            {IS_LOGGED_IN && (
              <div className="flex items-center gap-2">
                <HeaderButton variant="outlined">로그아웃</HeaderButton>
              </div>
            )}
            {!IS_LOGGED_IN && (
              <div className="flex gap-2">
                <HeaderButton variant="outlined">로그인</HeaderButton>
                <HeaderButton variant="contained">회원가입</HeaderButton>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
