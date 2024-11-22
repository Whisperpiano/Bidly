import Alert from "../elements/Alert";

export default function Title() {
  return (
    <>
      <h2 className="mb-3 text-sm font-semibold uppercase dark:text-neutral-50 text-neutral-900">
        Title
      </h2>
      <Alert text="Give it a name everyone will remember!" type="information" />
      <div className="mt-6 flex flex-col gap-1.5">
        <label
          htmlFor="title"
          className="text-xs font-medium dark:text-neutral-400"
        >
          Item title
        </label>
        <input
          type="text"
          id="title"
          className="p-3 rounded-lg border outline-none text-sm dark:bg-neutral-950 dark:border-neutral-800 dark:text-neutral-50"
        />
        <span className="ml-auto text-xs font-medium dark:text-neutral-400">
          0/80
        </span>
      </div>
    </>
  );
}
