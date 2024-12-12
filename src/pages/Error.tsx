import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const typedError = error as { statusText: string; message: string };

  return (
    <>
      <section className="grid place-content-center text-center h-full">
        <h1 className="text-2xl font-bold dark:text-neutral-50 text-neutral-900">
          Something went wrong
        </h1>
        <p className="pt-1.5 text-sm dark:text-neutral-400 text-neutral-600">
          <i>{typedError.statusText || typedError.message}</i>
        </p>
        <Link
          to="/"
          className="mt-6 rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] px-4 bg-primary-600 text-neutral-50 hover:bg-primary-700 justify-center font-semibold"
        >
          Go back home
        </Link>
      </section>
    </>
  );
}
