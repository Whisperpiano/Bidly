import { Resend } from "resend";
import EmailTemplate from "../../src/components/templates/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
  try {
    const body = JSON.parse(event.body);

    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: body.to || ["default@example.com"],
      subject: body.subject || "Hello World!",
      react: EmailTemplate(),
      text: "",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}
