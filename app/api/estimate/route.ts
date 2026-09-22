import { Resend } from "resend";
import { services } from "@/data/services";
import { site } from "@/data/site";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  if (!resend) {
    return Response.json(
      {
        error:
          "Estimate requests are temporarily unavailable. Please call or email us directly.",
      },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const serviceSlug =
    typeof body.service === "string" ? body.service.trim() : "";
  const details = typeof body.details === "string" ? body.details.trim() : "";

  if (!name || !phone || !email || !serviceSlug) {
    return Response.json(
      { error: "Please fill out all required fields." },
      { status: 400 },
    );
  }

  const serviceLabel =
    serviceSlug === "other"
      ? "Something else"
      : (services.find((service) => service.slug === serviceSlug)?.title ??
        serviceSlug);

  const html = `
    <div style="font-family: sans-serif; line-height: 1.5;">
      <h2>New estimate request from the website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
      <p><strong>Details:</strong><br />${escapeHtml(details).replace(/\n/g, "<br />") || "<em>None provided</em>"}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send(
      {
        from: "Savannah Level Estimates <onboarding@resend.dev>",
        to: [site.email],
        replyTo: email,
        subject: `New estimate request from ${name}`,
        html,
      },
      { idempotencyKey: `estimate-request/${email}-${Date.now()}` },
    );

    if (error) {
      console.error("[v0] Resend error:", error.message);
      return Response.json(
        {
          error:
            "We could not send your request. Please call or email us directly.",
        },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("[v0] Estimate request failed:", error);
    return Response.json(
      {
        error:
          "We could not send your request. Please call or email us directly.",
      },
      { status: 500 },
    );
  }
}
