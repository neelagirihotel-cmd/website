import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, category, content } = body;

    if (!name || !category || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const template = await prisma.template.create({
      data: {
        name,
        category,
        content,
      },
    });

    return NextResponse.json({ success: true, template });
  } catch (error) {
    console.error("Template creation error:", error);
    // Handle unique constraint error on name
    if (error.code === 'P2002') {
      return NextResponse.json({ error: "Template name already exists" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
