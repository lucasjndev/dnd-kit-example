import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const isLoggedPaths = ["/api/hello"];

  const middlewareArgument = (paths: string[]) => {
    let argument;
    paths.forEach((el) => {
      argument = request.nextUrl.pathname.startsWith(el) || argument;
    });
    return argument;
  };

  if (middlewareArgument(isLoggedPaths)) {
    // This logic is only applied to /about
    console.log("Middleware! TS");
  }
}
