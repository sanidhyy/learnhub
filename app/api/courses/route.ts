import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId || !isTeacher(userId))
      return new NextResponse("Unauthorized.", { status: 401 });

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course, { status: 200 });
  } catch (error: unknown) {
    console.log("[COURSES]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
