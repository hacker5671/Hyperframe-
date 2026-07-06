import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const HEYGEN_BASE = "https://api.heygen.com";

export async function GET(
  req: NextRequest,
  { params }: { params: { videoId: string } }
) {
  const apiKey = process.env.HEYGEN_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "HEYGEN_API_KEY is not set on the server." },
      { status: 500 }
    );
  }

  const { videoId } = params;
  if (!videoId) {
    return NextResponse.json({ error: "Missing videoId." }, { status: 400 });
  }

  try {
    const resp = await fetch(`${HEYGEN_BASE}/v3/videos/${videoId}`, {
      headers: { "X-Api-Key": apiKey },
      cache: "no-store",
    });

    const payload = await resp.json().catch(() => null);

    if (!resp.ok) {
      const message =
        payload?.error?.message ||
        payload?.message ||
        `HeyGen status check failed (${resp.status}).`;
      return NextResponse.json({ error: message }, { status: resp.status });
    }

    const data = payload?.data;
    return NextResponse.json({
      status: data?.status as string,
      videoUrl: data?.video_url as string | undefined,
      thumbnailUrl: data?.thumbnail_url as string | undefined,
      duration: data?.duration as number | undefined,
      failureCode: data?.failure_code as string | undefined,
      failureMessage: data?.failure_message as string | undefined,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Could not reach HeyGen. Try again in a moment." },
      { status: 502 }
    );
  }
}
