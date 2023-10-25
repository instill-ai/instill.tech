import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LATEST_VERSIONS } from "../version.mjs";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/docs/latest")) {
    const redirectUrl = request.url.replace("latest", LATEST_VERSIONS["core"]);
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
}

export const config = {
  matcher: "/docs/:path*",
};
