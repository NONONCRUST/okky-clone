"use client"

import React from "react"

interface Props {
  title: string
}

const PostListHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center h-16 p-4 px-8 text-white bg-gray-500 rounded-xl">
      <span className="text-lg">{title}</span>
    </div>
  )
}

export default PostListHeader
