import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default async function midleware(req, res) {
  const logged_in = req.cookies.get("logged_in");
  if (!req.cookies.has("logged_in")) {
    console.log(NextResponse.next().cookies);
    let response = NextResponse.redirect(new URL("/panel", req.url));
    response.cookies.set("logged_in", "false");
    return response;
  }

  if (logged_in.value == "true") {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/panel"],
};
