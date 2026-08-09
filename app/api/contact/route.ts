import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Zod Server-side Validation
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors
        .map((err) => err.message)
        .join(" ");

      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 400 }
      );
    }

    const { name, email, subject, message, hp_website } = validationResult.data;

    // 2. Anti-Spam Honeypot Check
    if (hp_website && hp_website.trim().length > 0) {
      // Quietly reject bot submissions
      return NextResponse.json(
        { success: true, message: "Message processed successfully." },
        { status: 200 }
      );
    }

    // 3. Dispatch Email via transporter service
    const dispatchResult = await sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    if (!dispatchResult.success) {
      return NextResponse.json(
        { success: false, error: dispatchResult.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Route /api/contact error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
