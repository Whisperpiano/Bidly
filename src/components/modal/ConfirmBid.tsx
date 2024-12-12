import { useEffect } from "react";
import { useModalStore } from "../../store/modal";
import { useMakeBid } from "../../hooks/listings/useMakeBid";
import Spinner from "../elements/Spinner";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: number;
  id: string;
  refetch: () => void;
}

export default function ConfirmBid({
  isOpen,
  onClose,
  price,
  id,
  refetch,
}: ModalProps) {
  const closeMakeBidPanel = useModalStore(
    (state) => state.handlePlaceABidClose
  );

  const { isLoading, makeBid } = useMakeBid({ refetch });

  const handleConfirm = async () => {
    await makeBid(id, price);
    onClose();
    closeMakeBidPanel();
  };

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

  if (!isOpen) return null;

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 bg-opacity-75 p-5 backdrop-blur-sm animate-fastreveal"
      onClick={onClose}
    >
      <div className="flex overflow-hidden max-w-sm dark:bg-neutral-900 bg-neutral-50 rounded-lg p-6">
        <div className="flex flex-col gap-3 w-[320px]">
          <h2 className="pb-1.5 text-center text-xl font-semibold dark:text-neutral-50 text-neutral-900">
            Confirm bid
          </h2>

          <p className="text-center pb-3 text-sm dark:text-neutral-50 text-neutral-900">
            You’re about to throw down a bid of{" "}
            <span className="font-medium">{price} NOFF</span>. Ready to roll the
            dice?
          </p>

          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg text-sm flex items-center gap-2 h-[42px] bg-neutral-200/50 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 w-full justify-center font-semibold "
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="rounded-lg text-sm flex w-full items-center gap-2 h-[42px] bg-primary-600 text-neutral-50 hover:bg-primary-700 justify-center font-semibold disabled:opacity-75"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Yes, do it!"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
