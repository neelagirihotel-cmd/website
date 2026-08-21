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

    const { customers } = await req.json();

    if (!Array.isArray(customers) || customers.length === 0) {
      return NextResponse.json({ error: "Invalid payload or empty list" }, { status: 400 });
    }

    // Prisma createMany has `skipDuplicates: true` which avoids crashing on unique constraint violations (e.g. mobile)
    const result = await prisma.customer.createMany({
      data: customers,
      skipDuplicates: true, 
    });

    return NextResponse.json({ success: true, count: result.count });
  } catch (error) {
    console.error("CSV import error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
