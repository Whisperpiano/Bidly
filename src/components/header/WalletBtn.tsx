import { PiWalletFill } from "react-icons/pi";
import { AuthGuard } from "../../utils/AuthGuard";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

interface WalletBtnProps {
  onLoginOpen: () => void;
}

export default function WalletBtn({ onLoginOpen }: WalletBtnProps) {
  const isLoggedIn = AuthGuard();
  return (
    <>
      {isLoggedIn ? (
        <Link
          to={`/profile/hola`}
          className={`rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] aspect-square justify-center border dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 text-neutral-600 border-neutral-200/50 bg-neutral-200/50  
          }`}
          aria-label="Account wallet"
        >
          <DotLottieReact
            src="https://lottie.host/6df71a0d-a08f-4772-8950-45db38d3c1fe/9ZAAh6eQuk.lottie"
            loop
            autoplay
          />
        </Link>
      ) : (
        <button
          className="rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] px-4 bg-primary-600 text-neutral-50 hover:bg-primary-700 justify-center font-semibold "
          aria-label="Connect wallet"
          onClick={onLoginOpen}
        >
          <PiWalletFill size={18} />
          Login
        </button>
      )}
    </>
  );
}
