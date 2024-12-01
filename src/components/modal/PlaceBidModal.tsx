import { useEffect, useState } from "react";
import { PiXBold } from "react-icons/pi";
import { useAuthStore } from "../../store/user";
import Alert from "../elements/Alert";
import setBid from "../../api/listings/setBid";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: number;
  id: string;
}

interface BidSelectionObj {
  name: string;
  value: number;
}

type BidSelection = "tiny" | "power";

const selectedStyle =
  "dark:bg-neutral-800 bg-neutral-100 dark:border-neutral-500 border-neutral-400 dark:text-neutral-50 text-neutral-950";

const notSelectedStyle =
  "dark:bg-neutral-900 bg-neutral-200/50 dark:border-neutral-800 border-neutral-200/50 dark:text-neutral-400 text-neutral-500";

export default function PlaceBidModal({
  isOpen,
  onClose,
  price,
  id,
}: ModalProps) {
  const user = useAuthStore((state) => state.profile);
  const [selectedBid, setSelectedBid] = useState<BidSelectionObj>({
    name: "tiny",
    value: 1,
  });
  const [hasEnoughCoins, setHasEnoughCoins] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (user) {
      const requiredAmount = price + selectedBid.value;
      setHasEnoughCoins(user?.credits >= requiredAmount);
    }
  }, [selectedBid, user, price]);

  if (!isOpen) return null;

  const handleBidTypeChange = (type: BidSelection) => {
    setSelectedBid({
      name: type,
      value: type === "tiny" ? 1 : 50,
    });
  };

  const handleMakeBid = async (id: string, amount: number) => {
    setIsLoading(true);

    try {
      const confirm = window.confirm("Are you sure you want to make this bid?");
      if (!confirm) return;
      const bid = await setBid({ id, amount });

      if (!bid) {
        return;
      }
      if ("data" in bid) {
        setIsError(false);
        setErrorMessage("");
        onClose();
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

  console.log(isLoading);
  console.log(isError);
  console.log(errorMessage);

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 bg-opacity-75 p-5 backdrop-blur-sm animate-fastreveal "
      onClick={onClose}
    >
      <article
        className="relative p-6 flex overflow-hidden max-w-sm dark:bg-neutral-900 bg-neutral-50 rounded-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full">
          <button
            type="button"
            onClick={onClose}
            className="absolute z-50 top-3 right-3 rounded-full p-2 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 bg-neutral-200/50 text-neutral-900 hover:bg-neutral-200"
          >
            <span className="sr-only">Close auth modal</span>
            <PiXBold size={15} />
          </button>
          <h2 className="pb-3 text-lg font-medium dark:text-neutral-50 text-neutral-900">
            Place a bid
          </h2>
          <p className="pb-3 text-sm dark:text-neutral-50 text-neutral-900 ">
            Feeling cautious or going big? The choice is yours!
          </p>
          {!hasEnoughCoins && (
            <div className="mb-6">
              <Alert text="You don't have enough coins!" type="error" />
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              className={`flex flex-col gap-2 flex-grow rounded-lg text-sm xs:text-xs p-3 border font-medium duration-0 text-left ${
                selectedBid.name === "tiny" ? selectedStyle : notSelectedStyle
              }`}
              onClick={() => handleBidTypeChange("tiny")}
            >
              <span>Tiny bid</span>
              <span>1 NOFF</span>
            </button>
            <button
              className={`flex flex-col gap-2 flex-grow rounded-lg text-sm xs:text-xs p-3 border font-medium duration-0 text-left ${
                selectedBid.name === "power" ? selectedStyle : notSelectedStyle
              }`}
              onClick={() => handleBidTypeChange("power")}
            >
              <span>Power bid</span>
              <span>50 NOFF</span>
            </button>
          </div>

          <div className="mt-6 border rounded-lg p-3 text-xs flex flex-col gap-3 dark:border-neutral-800 border-neutral-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold dark:text-neutral-400 text-neutral-500">
                Price
              </span>
              <span className="dark:text-neutral-50 text-neutral-900">
                {price + 1} NOFF
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold dark:text-neutral-400 text-neutral-500">
                Your coins
              </span>
              <span className="dark:text-green-500 text-green-700">
                {user?.credits ? `${user.credits} NOFF` : "No coins"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold dark:text-neutral-400 text-neutral-500">
                You pay
              </span>
              <span className="dark:text-red-400 text-red-600">
                -{selectedBid.value} NOFF
              </span>
            </div>
            <div className="h-0.5 bg-neutral-200 dark:bg-neutral-800"></div>
            <div className="flex items-center justify-between">
              <span className="font-semibold dark:text-neutral-400 text-neutral-500">
                Your balance
              </span>
              <span
                className={`font-bold ${
                  hasEnoughCoins
                    ? "dark:text-neutral-50 text-neutral-900"
                    : "dark:text-red-400 text-red-600"
                }`}
              >
                {user &&
                  hasEnoughCoins &&
                  `${user?.credits - selectedBid.value} NOFF`}
                {!hasEnoughCoins && "Not enough coins"}
              </span>
            </div>
          </div>
          <button
            className=" mt-6 w-full p-2.5 rounded-lg text-sm font-medium dark:bg-primary-600 dark:text-neutral-50 dark:hover:bg-primary-700 bg-primary-600 text-neutral-50 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-75"
            disabled={!hasEnoughCoins}
            onClick={() => handleMakeBid(id, selectedBid.value + price)}
          >
            Confirm bid
          </button>
        </div>
      </article>
    </section>
  );
}
