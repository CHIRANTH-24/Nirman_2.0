import { NextResponse } from "next/server";

import { PROJECT_TABLE } from "../../../../configs/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  const result = await db
    .select()
    .from(PROJECT_TABLE)
    .where(eq(PROJECT_TABLE.createdBy, createdBy));
  return NextResponse.json({ result: result });
}

export async function GET(req) {
  const reqUrl = req.url;
  const { searchParams } = new URL(reqUrl);
  const projectId = searchParams?.get("projectId");

  const course = await db
    .select()
    .from(PROJECT_TABLE)
    .where(eq(PROJECT_TABLE?.projectId, projectId));
  return NextResponse.json({ result: course[0] });
}
