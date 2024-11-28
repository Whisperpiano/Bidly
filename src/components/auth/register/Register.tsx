import { useRegister } from "../../../hooks/auth/useRegister";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiLockFill, PiUserFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import Alert from "../../elements/Alert";
import RegisterHeader from "./RegisterHeader";
import RegisterFooter from "./RegisterFooter";

interface RegisterProps {
  handleViewChange: (view: "login" | "register") => void;
}

export type RegisterInputs = {
  username: string;
  email: string;
  password: string;
};

export default function Register({ handleViewChange }: RegisterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterInputs>();

  const { isLoading, isSuccess, isError, errorMessage, registerUser } =
    useRegister();

  const onSubmit: SubmitHandler<RegisterInputs> = async ({
    username,
    email,
    password,
  }) => {
    const user = await registerUser(username, email, password);

    if (user?.data?.name) {
      reset();
      if (document.activeElement instanceof HTMLInputElement) {
        document.activeElement.blur();
      }
    }
  };

  console.log(errors);
  return (
    <article
      className="relative min-w-full rounded-lg p-6 text-sm text-tertiary-200"
      onClick={(e) => e.stopPropagation()}
    >
      <RegisterHeader handleViewChange={handleViewChange} />

      {!isError && !isSuccess && (
        <Alert
          text="Only stud.noroff.no accounts are supported"
          type="information"
        />
      )}
      {isError && <Alert text={errorMessage} type="error" />}
      {isSuccess && (
        <Alert text={`User registered successfully!`} type="success" />
      )}

      <form name="register" onSubmit={handleSubmit(onSubmit)}>
        {/* Username Input */}
        <div className="mt-6 relative flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="username-register"
              className="text-xs font-medium dark:text-neutral-50 text-neutral-900"
            >
              Username
              <span className="text-xs font-bold dark:text-red-400 text-red-600 ml-1">
                *
              </span>
            </label>
            {errors.username && (
              <span className="animate-reveal text-xs dark:text-red-400 text-red-600">
                {errors.username.message}
              </span>
            )}
          </div>

          <PiUserFill
            size={16}
            className="absolute top-8 left-3 dark:text-neutral-400 text-neutral-500"
          />

          <input
            type="text"
            id="username-register"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 4,
                message: "Must be at least 4 characters long",
              },
              maxLength: {
                value: 20,
                message: "Must be at most 20 characters long",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Can only contain letters and numbers",
              },
            })}
            autoComplete="off"
            title="Enter your username to register"
            placeholder="username"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-sm dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:focus:bg-neutral-900/50  dark:placeholder:text-neutral-400 bg-neutral-200/50 text-neutral-900 focus:border-neutral-400/50 placeholder:text-neutral-500 focus:bg-neutral-50"
          />
        </div>

        {/* Email Input */}
        <div className="mt-6 relative flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="text-xs font-medium dark:text-neutral-50 text-neutral-900"
            >
              Email
              <span className="text-xs font-bold dark:text-red-400 text-red-600 ml-1">
                *
              </span>
            </label>

            {errors.email && (
              <span className="text-xs animate-reveal dark:text-red-400 text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>

          <MdEmail
            size={16}
            className="absolute top-8 left-3 dark:text-neutral-400 text-neutral-500"
          />
          <input
            type="text"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[\w\-.]+@(stud\.)?noroff\.no$/,
                message: "Email must be a valid stud.noroff.no address",
              },
            })}
            title="Email must be a valid stud.noroff.no address"
            placeholder="example@stud.noroff.no"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-sm dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:focus:bg-neutral-900/50  dark:placeholder:text-neutral-400 bg-neutral-200/50 text-neutral-900 focus:border-neutral-400/50 placeholder:text-neutral-500 focus:bg-neutral-50"
          />
        </div>

        {/* Password Input */}
        <div className="mt-6 relative flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password-register"
              className="text-xs font-medium dark:text-neutral-50 text-neutral-900"
            >
              Password
              <span className="text-xs font-bold dark:text-red-400 text-red-600 ml-1">
                *
              </span>
            </label>
            {errors.password && (
              <span className="animate-reveal text-xs dark:text-red-400 text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>

          <PiLockFill
            size={16}
            className="absolute top-8 left-3 dark:text-neutral-400 text-neutral-500"
          />

          <input
            type="password"
            id="password-register"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 8,
                message: "Must be at least 8 characters long",
              },
              maxLength: {
                value: 20,
                message: "Must be at most 20 characters long",
              },
            })}
            title="Password must be at least 8 characters long and no more than 32 characters"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-sm dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:focus:bg-neutral-900/50  dark:placeholder:text-neutral-400 bg-neutral-200/50 text-neutral-900 focus:border-neutral-400/50 placeholder:text-neutral-500 focus:bg-neutral-50"
            placeholder="********"
          />
        </div>
        {/* Submit Button */}
        <RegisterFooter isLoading={isLoading} />
      </form>
    </article>
  );
}
