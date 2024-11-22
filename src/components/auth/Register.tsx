import BigLogo from "../layer/BigLogo";
import { PiArrowLeftBold, PiUserFill, PiLockFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

interface RegisterProps {
  handleViewChange: (view: "login" | "register") => void;
}

export default function Register({ handleViewChange }: RegisterProps) {
  return (
    <article
      className="relative min-w-full rounded-lg p-6 text-sm text-tertiary-200"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="absolute z-50 top-3 left-3 rounded-full p-2 dark:bg-neutral-800 dark-text-neutral-50 hover:bg-neutral-700"
        onClick={() => handleViewChange("login")}
      >
        <span className="sr-only">Close auth modal</span>
        <PiArrowLeftBold size={15} />
      </button>
      <div className="flex items-center justify-center translate-x-2 py-6">
        <BigLogo />
      </div>
      <h2 className="text-center text-xl font-semibold dark:text-neutral-50">
        Register account
      </h2>
      <form name="register">
        <div className="mt-6 relative flex flex-col gap-1">
          <label
            htmlFor="username-register"
            className="text-xs font-medium dark:text-neutral-50"
          >
            Username
            <span className="text-xs font-bold dark:text-red-400 ml-1">*</span>
          </label>

          <PiUserFill
            size={16}
            className="absolute top-8 left-3 dark:text-neutral-400"
          />

          <input
            type="text"
            id="username-register"
            name="username-register"
            autoComplete="off"
            title="Enter your username to register"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-xs dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:placeholder:text-neutral-400"
            placeholder="username"
            required
          />
        </div>
        <div className="mt-6 relative flex flex-col gap-1">
          <label
            htmlFor="email-register"
            className="text-xs font-medium dark:text-neutral-50"
          >
            Email
            <span className="text-xs font-bold dark:text-red-400 ml-1">*</span>
          </label>

          <MdEmail
            size={16}
            className="absolute top-8 left-3 dark:text-neutral-400"
          />

          <input
            type="email"
            id="email-register"
            name="email-register"
            pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
            autoComplete="off"
            title="Email must be a valid stud.noroff.no address"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-xs dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:placeholder:text-neutral-400"
            placeholder="example@stud.noroff.no"
            required
          />
        </div>
        <div className="mt-6 relative flex flex-col gap-1">
          <label
            htmlFor="password-register"
            className="text-xs font-medium dark:text-neutral-50"
          >
            Password
            <span className="text-xs font-bold dark:text-red-400 ml-1">*</span>
          </label>

          <PiLockFill
            size={16}
            className="absolute top-8 left-3 dark:text-neutral-400"
          />

          <input
            type="password"
            id="password-register"
            name="password-register"
            minLength={8}
            maxLength={32}
            title="Password must be at least 8 characters long and no more than 32 characters"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-xs dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:placeholder:text-neutral-400"
            placeholder="********"
            required
          />
        </div>
        <div className="my-6 pt-3 flex flex-col gap-3">
          <button
            type="submit"
            className="w-full p-2.5 rounded-lg text-sm font-medium dark:bg-primary-600 dark:text-neutral-50 dark:hover:bg-primary-700"
          >
            Register
          </button>
        </div>
      </form>
    </article>
  );
}
