import { ContactFormValues } from "./validation";

export async function sendContactEmail(payload: ContactFormValues): Promise<{ success: boolean; message: string }> {
  const apiKey = process.env.EMAIL_API_KEY;
  const destinationEmail = process.env.CONTACT_EMAIL || "utsav.dev@example.com";

  // If no production email API key is supplied, log to console in dev mode
  if (!apiKey) {
    console.log("--------------------------------------------------");
    console.log("[CONTACT FORM SIMULATION MODE - NO API KEY SET]");
    console.log(`To: ${destinationEmail}`);
    console.log(`From: ${payload.name} <${payload.email}>`);
    console.log(`Subject: ${payload.subject}`);
    console.log(`Message: ${payload.message}`);
    console.log("--------------------------------------------------");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      success: true,
      message: "Message dispatched successfully (Simulation Mode).",
    };
  }

  try {
    // Standard fetch implementation for external mail service (e.g. Resend, SendGrid, Mailgun)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || "Portfolio Contact <onboarding@resend.dev>",
        to: [destinationEmail],
        reply_to: payload.email,
        subject: `[Portfolio Contact] ${payload.subject}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #D4A72C;">New Message from Portfolio</h2>
            <p><strong>Sender:</strong> ${payload.name} (${payload.email})</p>
            <p><strong>Subject:</strong> ${payload.subject}</p>
            <hr style="border: 1px solid #eee;" />
            <h3>Message:</h3>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${payload.message}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Email service error response:", errorData);
      throw new Error("Failed to send message via provider.");
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again or email directly.",
    };
  }
}
