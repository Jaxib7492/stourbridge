import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface EmailRequest {
  to: string | string[];
  subject: string;
  html: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { to, subject, html }: EmailRequest = await req.json();

    console.log("Attempting to send email to:", to);
    console.log("Subject:", subject);

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in environment variables");
      throw new Error("RESEND_API_KEY is not configured. Please add it in Supabase Edge Function secrets.");
    }

    console.log("API key found, length:", RESEND_API_KEY.length);

    const recipients = Array.isArray(to) ? to : [to];

    const emailPayload = {
      from: "Stourbridge Hearing <onboarding@resend.dev>",
      to: recipients,
      subject: subject,
      html: html,
    };

    console.log("Sending email with payload:", JSON.stringify({ ...emailPayload, html: "..." }));

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    const responseText = await response.text();
    console.log("Resend API response status:", response.status);
    console.log("Resend API response:", responseText);

    if (!response.ok) {
      console.error("Failed to send email:", responseText);
      throw new Error(`Resend API error (${response.status}): ${responseText}`);
    }

    const data = JSON.parse(responseText);
    console.log("Email sent successfully:", data);

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Email function error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        details: "Check Supabase Edge Function logs for more information"
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});