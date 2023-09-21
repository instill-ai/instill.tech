import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { VERSIONS } from "../version.mjs";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/docs/vdp/latest")) {
    const redirectUrl = request.url.replace("latest", VERSIONS["vdp"]);
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  if (request.nextUrl.pathname.startsWith("/docs/base/latest")) {
    const redirectUrl = request.url.replace("latest", VERSIONS["base"]);
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  if (request.nextUrl.pathname.startsWith("/docs/core/latest")) {
    const redirectUrl = request.url.replace("latest", VERSIONS["core"]);
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  if (request.nextUrl.pathname.startsWith("/docs/cloud/latest")) {
    const redirectUrl = request.url.replace("latest", VERSIONS["cloud"]);
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  if (request.nextUrl.pathname.startsWith("/docs/model/latest")) {
    const redirectUrl = request.url.replace("latest", VERSIONS["model"]);
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/docs/:path*",
};
