import Header from "@/components/Header"
import authOptions from "@/lib/options/authOptions"
import DarkMode from "@/providers/DarkMode"
import NextAuth from "@/providers/NextAuth"
import ReactHotToast from "@/providers/ReactHotToast"
import ReactQuery from "@/providers/ReactQuery"
import Recoil from "@/providers/Recoil"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import localFont from "next/font/local"
import "./globals.css"

const font = localFont({
  src: [
    {
      path: "fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
    },
    {
      path: "fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
    },
    {
      path: "fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
    },
    {
      path: "fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
    },
  ],
})

export const metadata: Metadata = {
  title: "Okky Clone",
  description: "Okky Clone Project",
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)

  return (
    <html lang="ko-KR" suppressHydrationWarning className={font.className}>
      <body className={"dark:bg-gray-800"}>
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
