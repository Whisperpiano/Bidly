export default function LoginFooter({
  handleViewChange,
  isLoading,
}: {
  handleViewChange: (view: "login" | "register") => void;
  isLoading: boolean;
}) {
  return (
    <div className="my-6 pt-3 flex flex-col gap-3">
      <button
        type="submit"
        className="w-full p-2.5 rounded-lg text-sm font-medium dark:bg-primary-600 dark:text-neutral-50 dark:hover:bg-primary-700 bg-primary-600 text-neutral-50 hover:bg-primary-700"
      >
        {isLoading ? "Loading..." : "Login"}
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
  );
}
