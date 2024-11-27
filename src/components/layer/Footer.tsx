import {
  PiTwitterLogoFill,
  PiInstagramLogoFill,
  PiDiscordLogoFill,
} from "react-icons/pi";
import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <footer
      className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between w-full px-2.5 py-5 relative border-t dark:border-neutral-800 border-neutral-200"
      aria-label="Fotter with information and social media links"
    >
      <Logo />

      <p className=" dark:text-neutral-400 text-neutral-600 text-xs sm:text-sm block  sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 order-3 sm:order-2 sm:py-0 py-4">
        © 2024 Bidly Inc. All rights reserved
      </p>
      <div className="flex items-center gap-2 sm:order-3 order-2 sm:py-0 py-4">
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] aspect-square justify-center border dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 dark:hover:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-900 text-neutral-600 border-neutral-100 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-700 hover:border-neutral-200 font-semibold"
          aria-label="Twitter"
        >
          <PiTwitterLogoFill
            size={20}
            className="dark:text-neutral-400 text-neutral-600 duration-0"
            aria-hidden
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] aspect-square justify-center border dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 dark:hover:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-900 text-neutral-600 border-neutral-100 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-700 hover:border-neutral-200 font-semibold"
          aria-label="Instagram"
        >
          <PiInstagramLogoFill
            size={20}
            className="dark:text-neutral-400 text-neutral-600 duration-0"
            aria-hidden
          />
        </a>
        <a
          href="https://www.discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] aspect-square justify-center border dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 dark:hover:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-900 text-neutral-600 border-neutral-100 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-700 hover:border-neutral-200 font-semibold"
          aria-label="Discord"
        >
          <PiDiscordLogoFill
            size={20}
            className="dark:text-neutral-400 text-neutral-600 duration-0"
            aria-hidden
          />
        </a>
      </div>
    </footer>
  );
}
