import { auth } from "@clerk/nextjs";
import { type NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { url } = await req.json();

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });

    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!courseOwner) return new NextResponse("Unauthorized.", { status: 401 });

    const attachment = await db.attachment.create({
      data: {
        url,
        name: url?.split("/")?.pop(),
        courseId: params.courseId,
      },
    });

    return NextResponse.json(attachment, { status: 200 });
  } catch (error: unknown) {
    console.log("[COURSE_ID_ATTACHMENTS]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
