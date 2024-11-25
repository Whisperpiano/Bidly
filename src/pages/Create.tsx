import { PiArrowLeftBold } from "react-icons/pi";

import DragDrop from "../components/create/DragDrop";
import Title from "../components/create/Title";
import Description from "../components/create/Description";
import Duration from "../components/create/Duration";
import Tags from "../components/create/Tags";
import Submit from "../components/create/Submit";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        className="border-b dark:border-neutral-800 border-neutral-200"
        aria-hidden
      ></div>

      <section className="max-w-screen-sm mx-auto border-x dark:border-neutral-800 border-neutral-200">
        <form name="create">
          <div className="flex items-center justify-between px-3 py-6 border-b dark:border-neutral-800 border-neutral-200 ">
            <h1 className="text-xl font-semibold dark:text-neutral-50 text-neutral-900">
              Create your listing
            </h1>
            <button
              type="button"
              className="flex font-medium items-center gap-1.5 text-sm py-2 px-3 rounded-lg group dark:text-neutral-400 dark:hover:text-neutral-300 text-neutral-600 hover:text-neutral-900"
              onClick={handleBack}
            >
              <PiArrowLeftBold />
              <span>Back</span>
            </button>
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-3 pb-8 pt-6">
            <DragDrop />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-3 pb-8 pt-6">
            <Title />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-3 pb-8 pt-6">
            <Description />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-3 pb-8 pt-6">
            <Duration />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-3 pb-8 pt-6">
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
