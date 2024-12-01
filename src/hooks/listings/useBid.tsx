import { useEffect, useState } from "react";
import setBid from "../../api/listings/setBid";

export function useBid({ id, amount }: { id: string; amount: number }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    async function makeBid() {
      setIsLoading(true);
      try {
        const bid = await setBid({ id, amount });
        if (!bid) {
          return;
        }
        if ("data" in bid) {
          setIsError(false);
          setErrorMessage("");
        } else if ("errors" in bid) {
          setIsError(true);
          setErrorMessage(bid.errors[0]?.message || "Unknown error");
        }
      } catch (error) {
        setIsError(true);
        setErrorMessage(
          `Something went wrong bidding on the listing with id ${id}: ${error}`
        );
      } finally {
        setIsLoading(false);
      }
    }

    makeBid();
  }, [id, amount]);

  return {
    isLoading,
    isError,
    errorMessage,
  };
}
