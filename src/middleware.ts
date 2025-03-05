import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./app/_lib/get-url";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(
    process.env.SESSION_COOKIE_NAME || "authenticationjs.session-token",
  );
  const pathname = request.nextUrl.pathname;

  if (pathname === "/auth" && token) {
    const redirectUrl = getUrl("/admin");
    console.log(`Redirecionando para: ${redirectUrl}`);
    return NextResponse.redirect(new URL(getUrl("/admin")));
  }

  if (pathname.includes("/admin") && !token) {
    const redirectUrl = getUrl("/auth");
    console.log(`Redirecionando para: ${redirectUrl}`);
    return NextResponse.redirect(new URL(getUrl("/auth")));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
