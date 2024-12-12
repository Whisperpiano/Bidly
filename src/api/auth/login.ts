import { toast } from "sonner";
import { NOROFF_API } from "../../lib/constants";

export default async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(NOROFF_API.auth.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    toast.error(`Error logging in: ${error}`);
  }
}
