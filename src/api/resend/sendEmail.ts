import EmailTemplate from "../../components/templates/EmailTemplate";

export const sendEmail = async ({ email }: { email: string }) => {
  try {
    const response = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: [`${email}`],
        subject: "Hello World!",
        html: EmailTemplate(),
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
