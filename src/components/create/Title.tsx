import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import Alert from "../elements/Alert";
import { CreateInputs } from "../../pages/Create";

export default function Title({
  register,
  errors,
  watch,
}: {
  register: UseFormRegister<CreateInputs>;
  errors: FieldErrors<CreateInputs>;
  watch: UseFormWatch<CreateInputs>;
}) {
  return (
    <>
      <h2 className="mb-3 text-sm font-semibold uppercase dark:text-neutral-50 text-neutral-900">
        Title
      </h2>
      <Alert text="Give it a name everyone will remember!" type="information" />
      <div className="mt-6 flex flex-col gap-1.5">
        <label
          htmlFor="title"
          className="flex items-center justify-between text-xs font-medium dark:text-neutral-400 text-neutral-700"
        >
          <span>Item title</span>
          {errors.title && (
            <span className="text-xs font-normal animate-reveal dark:text-red-400 text-red-600">
              {errors.title.message}
            </span>
          )}
        </label>
        <input
          {...register("title", {
            required: {
              value: true,
              message: "Title is required",
            },
            maxLength: {
              value: 80,
              message: "80 characters max.",
            },
          })}
          type="text"
          id="title"
          autoComplete="off"
          className={`p-3 rounded-lg border outline-none text-sm dark:bg-neutral-950 dark:hover:bg-neutral-900/50 dark:text-neutral-50 dark:focus:bg-neutral-900/50 bg-neutral-50 hover:bg-neutral-100  focus:bg-neutral-100  text-neutral-900 focus:outline-none ${
            errors.title
              ? "dark:border-red-400/75 border-red-600/75"
              : "dark:border-neutral-800 dark:hover:border-neutral-500 dark:focus:border-neutral-500 border-neutral-200 hover:border-neutral-400 focus:border-neutral-400 "
          }`}
        />
        <span
          className={`ml-auto text-xs font-medium  ${
            watch("title")?.length > 80
              ? "dark:text-red-400 text-red-600"
              : "dark:text-neutral-400 text-neutral-500"
          }`}
        >
          {watch("title")?.length || 0}/80
        </span>
      </div>
    </>
  );
}
