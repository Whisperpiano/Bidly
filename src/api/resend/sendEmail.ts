export const sendEmail = async () => {
  try {
    const response = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: ["jesusalberola90@gmail.com"],
        subject: "Hello World!",
        html: "<strong>It works!</strong>",
      }),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
