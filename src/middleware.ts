import { NextMiddlewareWithAuth, withAuth } from "next-auth/middleware"

const middleware: NextMiddlewareWithAuth = (req) => {
  console.log(req)
}

export default withAuth(middleware)

export const config = {
  matcher: "/questions",
}
