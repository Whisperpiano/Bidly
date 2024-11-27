import { PiWalletFill } from "react-icons/pi";

interface WalletBtnProps {
  onLoginOpen: () => void;
}

export default function WalletBtn({ onLoginOpen }: WalletBtnProps) {
  return (
    <button
      className="rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] px-4 bg-primary-600 text-neutral-50 hover:bg-primary-700 justify-center font-semibold "
      aria-label="Connect wallet"
      onClick={onLoginOpen}
    >
      <PiWalletFill size={18} />
      Login
    </button>
  );
}
