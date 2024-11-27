import BigLogo from "../logo/BigLogo";
import { PiXBold, PiLockFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

interface LoginProps {
  onClose: () => void;
  handleViewChange: (view: "login" | "register") => void;
}

export default function Login({ onClose, handleViewChange }: LoginProps) {
  return (
    <article
      className="relative min-w-full rounded-lg  p-6 text-sm text-tertiary-200"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute z-50 top-3 right-3 rounded-full p-2 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 bg-neutral-200/50 text-neutral-900 hover:bg-neutral-200"
      >
        <span className="sr-only">Close auth modal</span>
        <PiXBold size={15} />
      </button>
      <div className="flex items-center justify-center translate-x-2 py-6">
        <BigLogo />
      </div>
      <h2 className="text-center text-xl font-semibold dark:text-neutral-50 text-neutral-900">
        Login to Bidly
      </h2>
      <form name="login">
        <div className="mt-6 relative flex flex-col gap-1">
          <label
            htmlFor="email-login"
            className="text-xs font-medium dark:text-neutral-50 text-neutral-900"
          >
            Email
            <span className="text-xs font-bold dark:text-red-400 text-red-600 ml-1">
              *
            </span>
          </label>

          <MdEmail
            size={16}
            className="absolute top-8 left-3 dark:text-neutral-400 text-neutral-500"
          />

          <input
            type="email"
            id="email-login"
            name="email-login"
            pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
            autoComplete="off"
            title="Email must be a valid stud.noroff.no address"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-xs dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:placeholder:text-neutral-400 bg-neutral-200/50 text-neutral-900 focus:border-neutral-400/50 placeholder:text-neutral-500 focus:bg-neutral-50"
            placeholder="example@stud.noroff.no"
            required
          />
        </div>
        <div className="mt-6 relative flex flex-col gap-1">
          <label
            htmlFor="password-login"
            className="text-xs font-medium dark:text-neutral-50 text-neutral-900"
          >
            Password
            <span className="text-xs font-bold dark:text-red-400 text-red-600 ml-1">
              *
            </span>
          </label>
          <PiLockFill
            size={16}
            className="absolute top-8 left-3 dark:text-neutral-400 text-neutral-500"
          />
          <input
            type="password"
            id="password-login"
            name="password-login"
            minLength={8}
            maxLength={32}
            title="Password must be at least 8 characters long and no more than 32 characters"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-xs dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:placeholder:text-neutral-400 bg-neutral-200/50 text-neutral-900 focus:border-neutral-400/50 placeholder:text-neutral-500 focus:bg-neutral-50"
            placeholder="********"
            required
          />
        </div>
        <div className="my-6 pt-3 flex flex-col gap-3">
          <button
            type="submit"
            className="w-full p-2.5 rounded-lg text-sm font-medium dark:bg-primary-600 dark:text-neutral-50 dark:hover:bg-primary-700 bg-primary-600 text-neutral-50 hover:bg-primary-700"
          >
            Login
          </button>
          <div className="flex gap-2 items-center uppercase font-medium text-xs dark:text-neutral-400 text-neutral-500">
            <div className="w-full h-px bg-neutral-300 dark:bg-neutral-400/50"></div>
            Or
            <div className="w-full h-px  bg-neutral-300 dark:bg-neutral-400/50"></div>
          </div>
          <button
            type="button"
            className="w-full p-2.5 rounded-lg text-sm font-medium dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-50 bg-neutral-200/50 text-neutral-900 hover:bg-neutral-200"
            onClick={() => handleViewChange("register")}
          >
            Register
          </button>
        </div>
      </form>
    </article>
  );
}
