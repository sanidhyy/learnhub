import { auth } from "@clerk/nextjs";
import { NextResponse, type NextRequest } from "next/server";

import { db } from "@/lib/db";

export async function PUT(
  req: NextRequest,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    const { isCompleted } = await req.json();

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });

    const userProgress = await db.userProgress.upsert({
      where: {
        userId_chapterId: {
          userId,
          chapterId: params.chapterId,
        },
      },
      update: {
        isCompleted,
      },
      create: {
        userId,
        chapterId: params.chapterId,
        isCompleted,
      },
    });

    return NextResponse.json(userProgress, { status: 200 });
  } catch (error: unknown) {
    console.log("[CHAPTER_ID_PROGRESS: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
