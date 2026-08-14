// Triggered by a Supabase Database Webhook on `leads` INSERT (configured in
// the dashboard, not in code -- see setup notes). Supabase calls this with
// a payload shaped like: { type: "INSERT", table: "leads", record: {...} }

import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = Deno.env.get("LEAD_CONFIRMATION_FROM_EMAIL") ?? "audits@yourdomain.com";
const REPLY_TO = Deno.env.get("LEAD_CONFIRMATION_REPLY_TO") ?? FROM_EMAIL;

serve(async (req) => {
  try {
    const payload = await req.json();
    const record = payload.record;

    if (!record?.email) {
      return new Response(JSON.stringify({ error: "No email on record" }), { status: 400 });
    }

    const name = record.name || "there";
    const html = `
      <p>Hi ${name},</p>
      <p>Thanks for requesting a growth audit. We'll review your site and
      be in touch within one business day to book your walkthrough.</p>
      <p>— Quantum Growth Logic</p>
    `;
    const text = `Hi ${name},\n\nThanks for requesting a growth audit. We'll review your site and be in touch within one business day to book your walkthrough.\n\n— Quantum Growth Logic`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: record.email,
        reply_to: REPLY_TO,
        subject: "We've got your growth audit request",
        html,
        text,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", errText);
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send email", resend: errText }), { status: 502 });
  }
});