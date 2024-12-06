import { Resend } from "resend";
import { emailTemplate } from "../../lib/emailTemplate";

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendEmail = async (email: string) => {
  try {
    const response = await resend.emails.send({
      from: "bidlify@noreply.com",
      to: email,
      subject: "Bidlify - Subscription confirmation",
      html: emailTemplate,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
