import SNSButton from "@/components/SNSButton"
import Button from "@/components/common/Button"
import Input from "@/components/common/Input"
import LinkText from "@/components/common/LinkText"
import PATH from "@/lib/constants/path"
import Link from "next/link"

const LoginPage = () => {
  return (
    <main>
      <div className="flex justify-center px-6 pb-16 mt-20 sm:mt-32 sm:px-0">
        <div className="w-full max-w-md">
          <h2 className="mt-6 text-2xl font-bold text-center sm:text-3xl">
            OKKY에 오신것을 환영합니다.
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
            OKKY는 소프트웨어 개발자를 위한 지식공유 플랫폼입니다.
          </p>
          <div className="mx-4 sm:mx-0">
            <div className="mt-8">
              <span className="text-sm font-medium">SNS 로그인</span>
              <div className="grid grid-cols-3 gap-3 mt-1">
                <SNSButton variant="google" />
                <SNSButton variant="kakao" />
              </div>
            </div>
            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-500/30 dark:border-gray-500/70" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white dark:bg-gray-800">
                  OKKY 아이디로 로그인
                </span>
              </div>
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex flex-col">
                <label
                  htmlFor="user-id"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  아이디
                </label>
                <Input id="user-id" className="mt-1" />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="user-id"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  비밀번호
                </label>
                <Input id="user-id" className="mt-1" />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Link
                className="mt-6 text-sm text-blue-500 hover:text-blue-400"
                href={PATH.FORGOT}
              >
                계정찾기
              </Link>
            </div>
            <Button className="mt-8">로그인</Button>
            <p className="flex items-center justify-center mt-5">
              <span className="mr-1 text-sm font-thin">
                아직 회원이 아니신가요?
              </span>
              <LinkText href={PATH.SIGNUP}>회원가입</LinkText>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
