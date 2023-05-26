import { NextResponse } from "next/server"

const GET = async (request: Request) => {
  const DUMMY_DATA = {
    message: "Hello World!",
  }

  return NextResponse.json(DUMMY_DATA)
}

export default GET
