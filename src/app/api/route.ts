import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {

    return NextResponse.json({
        author: "Alper Koşay",
        email: "alperk.kossay@gmail.com"
    })
}


export function middleware(request: NextRequest) {
    return NextResponse.json({ message: "middleware" })
}