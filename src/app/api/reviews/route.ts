import { NextResponse } from "next/server";
import { getReviews } from "@/lib/reviews";

export const revalidate = 3600;

export async function GET() {
  const result = await getReviews();
  return NextResponse.json(result);
}
