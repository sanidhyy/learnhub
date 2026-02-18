import { auth } from "@clerk/nextjs";
import Mux from "@mux/mux-node";
import { NextResponse, type NextRequest } from "next/server";

import { db } from "@/lib/db";

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!,
);

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> },
) {
  try {
    const { courseId } = await params;
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });

    const course = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!course) return new NextResponse("Not found.", { status: 404 });

    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId)
        await Video.Assets.del(chapter.muxData.assetId);
    }

    const deletedCourse = await db.course.delete({
      where: {
        id: courseId,
        userId,
      },
    });

    return NextResponse.json(deletedCourse, { status: 200 });
  } catch (error: unknown) {
    console.log("[COURSE_ID_DELETE]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> },
) {
  try {
    const { courseId } = await params;
    const { userId } = auth();
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
