import Image from "next/image"
import Link from "next/link"
import React from "react"
import darkLogo from "../../public/images/logo-dark.svg"
import lightLogo from "../../public/images/logo-light.svg"

const HeaderLogo: React.FC = () => {
  return (
    <Link href="/" className="w-[120px]">
      <span className="sr-only">OKKY</span>
      <Image src={lightLogo} className="dark:hidden" alt="OKKY Logo" priority />
      <Image
        src={darkLogo}
        className="hidden dark:block"
        alt="OKKY Logo"
        priority
      />
    </Link>
  )
}

export default HeaderLogo
