import { PiWalletFill } from "react-icons/pi";
import { AuthGuard } from "../../utils/AuthGuard";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/user";

interface WalletBtnProps {
  onLoginOpen: () => void;
}

export default function WalletBtn({ onLoginOpen }: WalletBtnProps) {
  const userName = useAuthStore((state) => state.profile?.name);
  const isLoggedIn = AuthGuard();
  const credits = useAuthStore((state) => state.profile?.credits);

  return (
    <>
      {isLoggedIn ? (
        <Link
          to={`/profile/${userName}`}
          className={` pl-2 rounded-lg text-sm inline-flex items-center justify-center h-[36px] sm:h-[42px]  border dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 text-neutral-600 border-neutral-200/50 bg-neutral-200/50  hover:dark:text-neutral-300 hover:dark:border-neutral-500 hover:dark:bg-neutral-900 hover:bg-neutral-200 hover:text-neutral-700 hover:border-neutral-200
          }`}
          aria-label="Account wallet"
        >
          {credits}

          <DotLottieReact
            src="https://lottie.host/6df71a0d-a08f-4772-8950-45db38d3c1fe/9ZAAh6eQuk.lottie"
            className="aspect-square w-10"
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
