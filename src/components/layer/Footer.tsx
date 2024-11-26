import {
  PiTwitterLogoFill,
  PiInstagramLogoFill,
  PiDiscordLogoFill,
} from "react-icons/pi";
import Button from "./Button";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between w-full px-2.5 py-5 relative border-t dark:border-neutral-800 border-neutral-200">
      <Logo />

      <p className=" dark:text-neutral-400 text-neutral-600 text-xs sm:text-sm block  sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 order-3 sm:order-2 sm:py-0 py-4">
        © 2024 Bidly Inc. All rights reserved
      </p>
      <div className="flex items-center gap-2 sm:order-3 order-2 sm:py-0 py-4">
        <Button type="outlined" ariaLabel="Twitter">
          <PiTwitterLogoFill
            size={20}
            className="dark:text-neutral-400 text-neutral-600 duration-0"
          />
        </Button>
        <Button type="outlined" ariaLabel="Instagram">
          <PiInstagramLogoFill
            size={20}
            className="dark:text-neutral-400 text-neutral-600 duration-0"
          />
        </Button>
        <Button type="outlined" ariaLabel="Discord">
          <PiDiscordLogoFill
            size={20}
            className="dark:text-neutral-400 text-neutral-600 duration-0"
          />
        </Button>
      </div>
    </footer>
  );
}
