import { PiArrowLeftBold } from "react-icons/pi";

import DragDrop from "../components/create/DragDrop";
import Title from "../components/create/Title";
import Description from "../components/create/Description";
import Duration from "../components/create/Duration";
import Tags from "../components/create/Tags";
import Submit from "../components/create/Submit";

export default function Create() {
  return (
    <>
      <div className="border-b dark:border-neutral-800" aria-hidden></div>

      <section className="max-w-screen-sm mx-auto border-x dark:border-neutral-800">
        <form name="create">
          <div className="flex items-center justify-between px-3 py-6 border-b dark:border-neutral-800 dark:bg-neutral">
            <h1 className="text-xl font-semibold dark:text-neutral-50">
              Create your listing
            </h1>
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm py-2 px-3 rounded-lg group dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:bg-neutral-900"
            >
              <PiArrowLeftBold className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                Back
              </span>
            </button>
          </div>
          <div className="border-b dark:border-neutral-800 px-3 pb-8 pt-6">
            <DragDrop />
          </div>
          <div className="border-b dark:border-neutral-800 px-3 pb-8 pt-6">
            <Title />
          </div>
          <div className="border-b dark:border-neutral-800 px-3 pb-8 pt-6">
            <Description />
          </div>
          <div className="border-b dark:border-neutral-800 px-3 pb-8 pt-6">
            <Duration />
          </div>
          <div className="border-b dark:border-neutral-800 px-3 pb-8 pt-6">
            <Tags />
          </div>
          <div className="text-center px-3 pb-8 pt-6">
            <Submit />
          </div>
        </form>
      </section>
    </>
  );
}
