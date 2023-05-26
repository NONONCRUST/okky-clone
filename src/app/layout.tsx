import Header from "@/components/Header"
import ReactHotToast from "@/providers/ReactHotToast"
import ReactQuery from "@/providers/ReactQuery"
import Recoil from "@/providers/Recoil"
import clsx from "clsx"
import { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const font = localFont({
  src: "fonts/PretendardVariable.woff2",
  fallback: [
    "Pretendard",
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
})

export const metadata: Metadata = {
  title: "Okky Clone",
  description: "Okky Clone Project",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko-KR" className={font.className}>
      <body className={clsx(font.className, "dark:bg-gray-800")}>
        <Recoil>
          <ReactQuery>
            <Header />
            {children}
          </ReactQuery>
        </Recoil>
        <ReactHotToast />
      </body>
    </html>
  )
}

export default RootLayout
