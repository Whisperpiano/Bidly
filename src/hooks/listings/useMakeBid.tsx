import { useEffect, useState } from "react";
import setBid from "../../api/listings/setBid";
import { UserProfile } from "../../types/types";
import { useAuthStore } from "../../store/user";

interface MakeBidProps {
  price: number;
  selectedBid: BidSelectionObj;
  user: UserProfile | null;
  refetch: () => void;
}

interface BidSelectionObj {
  name: "tiny" | "power";
  value: 1 | 50;
}

export function useMakeBid({
  price,
  selectedBid,
  user,
  refetch,
}: MakeBidProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [hasEnoughCoins, setHasEnoughCoins] = useState<boolean>(true);
  const updateCredits = useAuthStore((state) => state.updateCredits);

  useEffect(() => {
    if (user) {
      const requiredAmount = selectedBid.value + 1;
      setHasEnoughCoins(user?.credits >= requiredAmount);
    }
  }, [selectedBid, user, price]);

  const makeBid = async (id: string, amount: number) => {
    setIsLoading(true);

    try {
      const confirm = window.confirm(
        `Heads up! Bidding will cost you ${amount} NOFF. Ready to roll the dice?`
      );
      if (!confirm) return;
      const bid = await setBid({ id, amount });

      if (!bid) {
        return;
      }
      if ("data" in bid) {
        setIsError(false);
        setErrorMessage("");
        updateCredits(amount);
        refetch();
      }
      if ("errors" in bid) {
        setIsError(true);
        setErrorMessage(bid.errors[0]?.message || "Unknown error");
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
    hasEnoughCoins,
    makeBid,
  };
}
