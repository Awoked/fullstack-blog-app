import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { SectionsContent } from "@prisma/client";

export const revalidate = 1;

export async function GET(req: NextRequest) {
  const data = await prisma.sectionsContent.findMany();
  prisma.$disconnect();

  return NextResponse.json(data);
}
export async function POST(req: NextRequest) {
  const body: SectionsContent = await req.json();

  try {
    if (body.sectionName === null) {
      const data = await prisma.sectionsContent.create({
        data: body,
      });
      return NextResponse.json({ message: "created", data }, { status: 200 });
    }

    const data = await prisma.sectionsContent.update({
      where: {
        id: body.id,
      },
      data: body,
    });

    return NextResponse.json({ message: "updated", data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 400 });
  }
}
