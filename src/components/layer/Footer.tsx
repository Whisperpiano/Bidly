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

      <p className="dark:text-neutral-400 text-neutral-600 text-sm  sm:absolute left-1/2 transform -translate-x-1/2 ">
        © 2024 Bidly Inc. All rights reserved
      </p>
      <div className="flex items-center gap-2 ">
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
