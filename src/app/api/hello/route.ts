import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export function GET(req: Request) {

    return NextResponse.json({ message: "hello" })
}

export async function POST(req: Request){
    // const body = req.body;
    let body =  await req.json();

    return NextResponse.json({
        message: req.method,
        data: body
    })
}