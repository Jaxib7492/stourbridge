import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface BookingData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDateTime: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const bookingData: BookingData = await req.json();

    const emailBody = `
New Appointment Booking Request
================================

Customer Details:
-----------------
Name: ${bookingData.fullName}
Phone: ${bookingData.phone}
Email: ${bookingData.email}

Appointment Details:
--------------------
Service: ${bookingData.service}
Preferred Date/Time: ${bookingData.preferredDateTime || "Not specified"}

Message:
--------
${bookingData.message || "No message provided"}

================================
Please contact the customer to confirm their appointment.
    `;

    console.log("Booking notification email:", emailBody);
    console.log("In production, this would send an email to: info@stourbridgehearing.co.uk");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Notification sent successfully",
        debug: "Email logged to console. Configure email service for production."
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
