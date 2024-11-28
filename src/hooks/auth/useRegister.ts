import { useState } from "react";
import register from "../../api/auth/register";

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const registerUser = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      setIsLoading(true);
      const userRegister = await register({ username, email, password });

      if (userRegister.errors && userRegister.errors[0]) {
        throw new Error(userRegister.errors[0].message);
      }

      setIsError(false);
      setIsSuccess(true);
      return userRegister;
    } catch (error) {
      if (error instanceof Error) {
        setIsError(true);
        setErrorMessage(error.message);
        setIsSuccess(false);
      } else {
        setIsError(true);
        setErrorMessage("An unexpected error occurred");
        setIsSuccess(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    isError,
    errorMessage,
    registerUser,
  };
}
