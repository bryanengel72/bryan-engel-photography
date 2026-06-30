import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, division, date, message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Bryan Engel Photography <noreply@bryanengelphotography.com>",
      to: "thebryanengel@gmail.com",
      replyTo: email,
      subject: `Shoot inquiry — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Division: ${division || "Not specified"}`,
        `Show / shoot date: ${date || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
