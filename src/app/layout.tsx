import Header from "@/components/Header"
import authOptions from "@/lib/options/authOptions"
import DarkMode from "@/providers/DarkMode"
import NextAuth from "@/providers/NextAuth"
import ReactHotToast from "@/providers/ReactHotToast"
import ReactQuery from "@/providers/ReactQuery"
import Recoil from "@/providers/Recoil"
import clsx from "clsx"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
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

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)

  return (
    <html lang="ko-KR">
      <body className={clsx(font.className, "dark:bg-gray-800")}>
        <Recoil>
          <ReactQuery>
            <DarkMode>
              <NextAuth>
                <Header session={session} />
                {children}
              </NextAuth>
            </DarkMode>
          </ReactQuery>
        </Recoil>
        <ReactHotToast />
      </body>
    </html>
  )
}

export default RootLayout
