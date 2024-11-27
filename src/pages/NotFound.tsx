import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="grid place-content-center text-center h-full">
        <h1 className="text-2xl font-bold dark:text-neutral-50 text-neutral-900">
          Page not found
        </h1>
        <p className="pt-1.5 text-sm dark:text-neutral-400 text-neutral-600">
          The page you are looking for does not exist.
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
