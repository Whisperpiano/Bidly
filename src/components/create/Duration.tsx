import { FieldErrors, UseFormRegister } from "react-hook-form";
import Alert from "../elements/Alert";
import { CreateInputs } from "../../pages/Create";

export default function Duration({
  register,
  errors,
}: {
  register: UseFormRegister<CreateInputs>;
  errors: FieldErrors<CreateInputs>;
}) {
  return (
    <div>
      <h2 className=" mb-3 text-sm font-semibold uppercase dark:text-neutral-50 text-neutral-900">
        Duration
      </h2>
      <Alert
        text="Once you create the item you will not be able to change the duration."
        type="information"
      />
      <div className="mt-6 flex items-center justify-between">
        <label
          htmlFor="duration"
          className="text-sm dark:text-neutral-50 text-neutral-900"
        >
          Set the finish line for your auction!
        </label>
        <select
          id="duration"
          {...register("duration")}
          className={`p-3 rounded-lg border outline-none text-sm max-w-[120px] w-full ${
            errors.duration
              ? "border-red-500"
              : "dark:bg-neutral-950 dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/50 dark:hover:border-neutral-500 dark:focus:bg-neutral-800/50 bg-neutral-50 hover:bg-neutral-200/50 focus:bg-neutral-200/50 text-neutral-900"
          }`}
          defaultValue="1"
          aria-label="duration"
        >
          <option value="1">7 days</option>
          <option value="2">2 weeks</option>
          <option value="3">1 month</option>
          <option value="4">3 months</option>
        </select>
      </div>
      {errors.duration && (
        <p className="text-sm text-red-500 mt-2">{errors.duration.message}</p>
      )}
    </div>
  );
}
