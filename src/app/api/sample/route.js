import { NextResponse } from "next/server";

import { PROJECT_TABLE } from "../../../../configs/schema";
import { eq } from "drizzle-orm";
import db from "../../../../configs/DB";



export async function GET(req) {
 
  const course = await db
    .select()
    .from(PROJECT_TABLE)
    .orderBy(PROJECT_TABLE.id, "desc");
  return NextResponse.json({ result: course });
}
