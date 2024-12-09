import { Resend } from "resend";

const resend = new Resend("re_5zr9niNP_Mzu2E5S5zuwc7Uq7yvEatwzh");

export const sendEmail = async () => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["jesusalberola90@gmail.com"],
    subject: "Hello World!",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};
