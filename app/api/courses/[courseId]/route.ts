import { auth } from "@clerk/nextjs";
import { NextResponse, type NextRequest } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const values = await req.json();

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });

    const course = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course, { status: 200 });
  } catch (error: unknown) {
    console.log("[COURSE_ID]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
