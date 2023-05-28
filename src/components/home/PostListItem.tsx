"use client"

import PATH from "@/lib/constants/path"
import Link from "next/link"
import React from "react"

const PostListItem: React.FC = () => {
  return (
    <li className="flex flex-col py-4 last:pb-0 h-[80px]">
      <div className="flex">
        <div className="flex items-center flex-1 gap-1">
          {/* <Avatar size={20} /> */}
          <div className="w-5 h-5 mr-1 bg-gray-100 rounded-full" />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            신상호
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {"·"}
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">30</span>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {"·"}
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            19분 전
          </span>
        </div>
        {/* <div className="flex items-center gap-1">
          <p className="text-gray-700 dark:text-gray-300">0</p>
          <p className="text-gray-700 dark:text-gray-300">0</p>
        </div> */}
      </div>
      <Link href={PATH.COMMUNITY} className="mt-2 dark:text-white">
        카카오톡 REST API 로그아웃 할 때 access_Token
      </Link>
    </li>
  )
}

export default PostListItem
