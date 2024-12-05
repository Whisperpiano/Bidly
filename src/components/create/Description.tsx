import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { PiStarFourFill } from "react-icons/pi";
import { CreateInputs } from "../../pages/Create";

export default function Description({
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
        Description
      </h2>
      <p className="mb-3 text-sm dark:text-neutral-50 text-neutral-900 ">
        Describe it! Make them fall in love.
      </p>

      <div className="flex flex-col gap-1.5 mb-3">
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-medium  ${
              watch("description")?.length > 500
                ? "dark:text-red-400 text-red-600"
                : "dark:text-neutral-400 text-neutral-500"
            }`}
          >
            {watch("description")?.length || 0}/500
          </span>
          {errors.description && (
            <span className="text-xs font-normal animate-reveal dark:text-red-400 text-red-600">
              {errors.description.message}
            </span>
          )}
        </div>
        <label htmlFor="description" className="text-xs font-medium sr-only">
          Item description
        </label>
        <textarea
          {...register("description", {
            required: {
              value: true,
              message: "Description is required",
            },
            maxLength: {
              value: 500,
              message: "500 characters max.",
            },
          })}
          id="description"
          className={`p-3 rounded-lg resize-none border outline-none text-sm dark:bg-neutral-950 dark:hover:bg-neutral-900/50  dark:text-neutral-50 dark:focus:bg-neutral-900/50 dark:placeholder:text-neutral-500 bg-neutral-50 hover:bg-neutral-100 focus:bg-neutral-100  text-neutral-900 placeholder:text-neutral-500 focus:outline-none ${
            errors.description
              ? "dark:border-red-400/75 border-red-600/75"
              : "dark:border-neutral-800 dark:hover:border-neutral-500 dark:focus:border-neutral-500 border-neutral-200 hover:border-neutral-400 focus:border-neutral-400 "
          }`}
          placeholder="Write a detailed description of your item, or let the AI draft it for you!"
          rows={8}
        />
      </div>
      <button
        type="button"
        className="flex gap-2 items-center text-sm font-medium py-3 pr-3 pl-2 border rounded-lg dark:text-neutral-300 bg-transparent dark:border-neutral-800 ml-auto dark:hover:bg-neutral-900 dark:hover:text-neutral-50 dark:hover:border-neutral-500 text-neutral-800 hover:bg-neutral-200/50 hover:text-neutral-900 disabled:opacity-50 pointer-events-none"
        disabled
      >
        <PiStarFourFill className="dark:text-neutral-300 text-neutral-800 duration-0" />
        <span className="sr-only">Use AI to generate description</span>
        Use AI description
      </button>
    </>
  );
}
