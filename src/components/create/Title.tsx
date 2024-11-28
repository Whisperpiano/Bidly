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
          className="text-xs font-medium dark:text-neutral-400 text-neutral-700"
        >
          Item title
        </label>
        <input
          type="text"
          id="title"
          className="p-3 rounded-lg border outline-none text-sm dark:bg-neutral-950 dark:hover:bg-neutral-900/50 dark:border-neutral-800 dark:hover:border-neutral-500 dark:text-neutral-50 dark:focus:bg-neutral-900/50 dark:focus:border-neutral-500 bg-neutral-50 hover:bg-neutral-100 border-neutral-200 hover:border-neutral-400 focus:bg-neutral-100 focus:border-neutral-400 text-neutral-900 focus:outline-none"
        />
        <span className="ml-auto text-xs font-medium dark:text-neutral-400 text-neutral-500 ">
          0/80
        </span>
      </div>
    </>
  );
}

// type="email"
//             id="email-login"
//             name="email-login"
//             pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
//             autoComplete="off"
//             title="Email must be a valid stud.noroff.no address"
//             className="ps-9 p-2.5 rounded-lg border outline-none text-sm placeholder:text-xs dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:placeholder:text-neutral-400 dark:focus:bg-neutral-900/50  bg-neutral-200/50 text-neutral-900 focus:border-neutral-400/50 placeholder:text-neutral-500 focus:bg-neutral-50"
//             placeholder="example@stud.noroff.no"
//             required
//           />
