import { NextMiddlewareWithAuth, withAuth } from "next-auth/middleware"

const middleware: NextMiddlewareWithAuth = () => {}

export default withAuth(middleware)

export const config = {
  matcher: "/questions",
}
