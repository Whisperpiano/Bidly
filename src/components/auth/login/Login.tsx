import { useLogin } from "../../../hooks/auth/useLogin";
import { useAuthStore } from "../../../store/userStore";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { PiLockFill } from "react-icons/pi";
import Alert from "../../elements/Alert";
import LoginFooter from "./LoginFooter";
import LoginHeader from "./LoginHeader";
import { toast } from "sonner";

interface LoginProps {
  onClose: () => void;
  handleViewChange: (view: "login" | "register") => void;
}

export type LoginInputs = {
  email: string;
  password: string;
};

export default function Login({ onClose, handleViewChange }: LoginProps) {
  const setAuth = useAuthStore((state) => state.setAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInputs>();

  const { isLoading, isSuccess, isError, errorMessage, loginUser } = useLogin();

  const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
    const user = await loginUser(email, password);

    if (user?.data?.name && user?.data?.accessToken) {
      reset();
      setAuth(user.data.name, user.data.accessToken);
      onClose();
      toast.success(`Welcome back, ${user.data.name}!`);
    }
  };

  return (
    <article
      className="relative min-w-full rounded-lg p-6 text-sm text-tertiary-200"
      onClick={(e) => e.stopPropagation()}
    >
      <LoginHeader onClose={onClose} />

      {!isError && !isSuccess && (
        <Alert
          text="Only stud.noroff.no accounts are supported"
          type="information"
        />
      )}
      {isError && <Alert text={errorMessage} type="error" />}
      {isSuccess && <Alert text="Login successful!" type="success" />}

      <form name="login" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <div className="mt-6 relative flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="email-login"
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
            id="email-login"
            {...register("email", {
              pattern: {
                value: /^[\w\-.]+@(stud\.)?noroff\.no$/,
                message: "Email must be a valid stud.noroff.no address",
              },
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            title="Email must be a valid stud.noroff.no address"
            placeholder="example@stud.noroff.no"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-sm dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:placeholder:text-neutral-400 dark:focus:bg-neutral-900/50  bg-neutral-200/50 text-neutral-900 focus:border-neutral-400/50 placeholder:text-neutral-500 focus:bg-neutral-50"
            autoComplete="off"
          />
        </div>
        {/* Password Input */}
        <div className="mt-6 relative flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password-login"
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
            id="password-login"
            type="password"
            {...register("password", {
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              maxLength: {
                value: 20,
                message: "Password must be at most 20 characters long",
              },
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            placeholder="********"
            title="Password must be at least 8 characters long and no more than 32 characters"
            className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-sm dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:focus:bg-neutral-900/50  dark:placeholder:text-neutral-400 bg-neutral-200/50 text-neutral-900 focus:border-neutral-400/50 placeholder:text-neutral-500 focus:bg-neutral-50"
          />
        </div>
        {/* Submit Button */}
        <LoginFooter
          handleViewChange={handleViewChange}
          isLoading={isLoading}
        />
      </form>
    </article>
  );
}
