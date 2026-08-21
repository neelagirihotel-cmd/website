import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, templateId, audience } = await req.json();

    const customerCount = await prisma.customer.count();

    const campaign = await prisma.campaign.create({
      data: {
        name,
        templateId,
        audience,
        status: "SENT",
        recipients: customerCount, // Mock
        sentCount: customerCount, // Mock
        deliveredCount: customerCount - 1, // Mock
      },
    });

    return NextResponse.json({ success: true, campaign });
  } catch (error) {
    console.error("Error creating campaign:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
