import { useState } from "react";
import setBid from "../../api/listings/setBid";
import { useAuthStore } from "../../store/user";
import { toast } from "sonner";

interface MakeBidProps {
  refetch: () => void;
}

export function useMakeBid({ refetch }: MakeBidProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const updateCredits = useAuthStore((state) => state.updateCredits);

  const makeBid = async (id: string, amount: number) => {
    setIsLoading(true);

    try {
      const bid = await setBid({ id, amount });

      if (!bid) {
        return;
      }
      if ("data" in bid) {
        setIsError(false);
        setErrorMessage("");
        updateCredits(amount);
        refetch();
        toast.success("Bid placed successfully!");
      }
      if ("errors" in bid) {
        setIsError(true);
        setErrorMessage(bid.errors[0]?.message || "Unknown error");
        toast.error(bid.errors[0]?.message || "Unknown error");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    errorMessage,
    makeBid,
  };
}
