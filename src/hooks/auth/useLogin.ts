import { useState } from "react";
import login from "../../api/auth/login";

export function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const loginUser = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const userLogin = await login({ email, password });

      if (userLogin.errors && userLogin.errors[0]) {
        throw new Error(userLogin.errors[0].message);
      }

      setIsError(false);
      setIsSuccess(true);
      return userLogin;
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
    loginUser,
  };
}
