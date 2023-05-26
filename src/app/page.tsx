"use client"

import Button from "@/components/common/Button"
import toast from "react-hot-toast"

const Home = async () => {
  return (
    <main>
      <div>
        <Button onClick={() => toast.success("asd")}>토스트</Button>
      </div>
    </main>
  )
}

export default Home
