import { mailchimp } from "@/resources";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, locale = "en", email_address_check = "" } = await request.json();

    if (typeof email !== "string" || email.trim() === "") {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (email_address_check !== "") {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const payload = new URLSearchParams();
    payload.append("EMAIL", email.trim());
    payload.append("locale", locale);
    payload.append("email_address_check", email_address_check);

    const brevoResponse = await fetch(mailchimp.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Accept: "application/json,text/plain,*/*",
      },
      body: payload.toString(),
    });

    if (!brevoResponse.ok) {
      const responseText = await brevoResponse.text();
      console.error("Brevo subscription failed:", responseText);
      return NextResponse.json(
        { error: "Brevo rejected the subscription request." },
        { status: brevoResponse.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Brevo subscription error:", error);
    return NextResponse.json(
      { error: "We couldn't reach the subscription service. Please try again." },
      { status: 500 },
    );
  }
}
