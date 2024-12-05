import { PiArrowLeftBold } from "react-icons/pi";

import DragDrop from "../components/create/DragDrop";
import Title from "../components/create/Title";
import Description from "../components/create/Description";
import Duration from "../components/create/Duration";
import Tags from "../components/create/Tags";
import Submit from "../components/create/Submit";
import { useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export interface CreateInputs {
  media: {
    dropZone1: File;
    dropZone2?: File;
    dropZone3?: File;
    dropZone4?: File;
    dropZone5?: File;
  };
  title: string;
  description: string;
  duration: string;
  tags: string[];
}

export type MediaInput = {
  url: string;
  alt: string;
  id: string;
};

export default function Create() {
  const [media, setMedia] = useState<MediaInput[]>([]);
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<CreateInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<CreateInputs> = async (data) => {
    console.log(data);
    console.log(media);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="max-w-screen-sm mx-auto sm:border-x dark:border-neutral-800 border-neutral-200">
        <form name="create" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between px-0 sm:px-3 py-6 border-b dark:border-neutral-800 border-neutral-200 ">
            <h1 className="text-base sm:text-xl font-semibold dark:text-neutral-50 text-neutral-900">
              Create your listing
            </h1>
            <button
              type="button"
              className="flex font-medium items-center gap-1.5 text-sm py-2 px-0 sm:px-3 rounded-lg group dark:text-neutral-400 dark:hover:text-neutral-300 text-neutral-600 hover:text-neutral-900"
              onClick={handleBack}
            >
              <PiArrowLeftBold className="dark:text-neutral-400 text-neutral-600 duration-0" />
              Back
            </button>
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-0 sm:px-3 pb-8 pt-6">
            <DragDrop media={media} setMedia={setMedia} />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-0 sm:px-3 pb-8 pt-6">
            <Title register={register} errors={errors} watch={watch} />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-0 sm:px-3 pb-8 pt-6">
            <Description />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-0 sm:px-3 pb-8 pt-6">
            <Duration />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-0 sm:px-3 pb-8 pt-6">
            <Tags />
          </div>
          <div className="text-center px-0 sm:px-3 pb-8 pt-6">
            <Submit />
          </div>
        </form>
      </section>
    </>
  );
}
