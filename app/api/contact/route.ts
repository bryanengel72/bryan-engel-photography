import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, division, date, message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
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

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }

  console.log("Email sent:", data?.id);
  return NextResponse.json({ ok: true });
}
