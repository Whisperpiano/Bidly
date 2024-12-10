import { PiArrowLeftBold } from "react-icons/pi";

import DragDrop from "../components/create/DragDrop";
import Title from "../components/create/Title";
import Description from "../components/create/Description";
import Duration from "../components/create/Duration";
import Tags from "../components/create/Tags";
import Submit from "../components/create/Submit";
import { useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import createListing from "../api/listings/createListing";
import { scrollToTop } from "../utils/ScrollTop";
import { toast } from "sonner";

export interface CreateInputs {
  title: string;
  description: string;
  duration: string;
}

export type MediaInput = {
  url: string;
  alt: string;
  id: string;
};

export default function Create() {
  const [media, setMedia] = useState<MediaInput[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [typing, setTyping] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<CreateInputs>();
  const navigate = useNavigate();

  const transformDuration = (duration: number): string => {
    const now = new Date();

    switch (duration) {
      case 1:
        now.setDate(now.getDate() + 7);
        break;
      case 2:
        now.setDate(now.getDate() + 14);
        break;
      case 3:
        now.setMonth(now.getMonth() + 1);
        break;
      case 4:
        now.setMonth(now.getMonth() + 3);
        break;
      default:
        now.setDate(now.getDate() + 7);
    }

    return now.toISOString();
  };

  const onSubmit: SubmitHandler<CreateInputs> = async (data) => {
    try {
      const body = {
        title: data.title,
        description: data.description,
        tags: tags,
        media: media,
        endsAt: transformDuration(Number(data.duration)),
      };

      const response = await createListing(body);

      if (!response) {
        return;
      }
      if ("data" in response) {
        setSubmitError(null);
        setMedia([]);
        setTags([]);
        scrollToTop();
        navigate("/home");
        toast.success("Listing created successfully!", {
          action: {
            label: " View listing",
            onClick: () => {
              navigate(
                `/listing/${response.data.title
                  .toLocaleLowerCase()
                  .split(" ")
                  .join("-")}?id=${response.data.id}`
              );
            },
          },
        });
      }
      if ("errors" in response) {
        setSubmitError(response.errors[0]?.message || "Something went wrong");
        toast.error(response.errors[0]?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(`${submitError} ${error}. Try again later.`);
    } finally {
      reset();
    }
  };

  const handleBack = () => {
    const hasUnsavedChanges = () => {
      return (
        media.length > 0 ||
        tags.length > 0 ||
        !!watch("title")?.trim() ||
        !!watch("description")?.trim()
      );
    };

    if (hasUnsavedChanges()) {
      const confirmLeave = window.confirm(
        "You have unsaved changes. Are you sure you want to leave?"
      );
      if (confirmLeave) {
        navigate(-1);
      }
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <section className="animate-reveal max-w-screen-sm mx-auto sm:border-x dark:border-neutral-800 border-neutral-200">
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
            <Description
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
              typing={typing}
              setTyping={setTyping}
            />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-0 sm:px-3 pb-8 pt-6">
            <Duration register={register} errors={errors} />
          </div>
          <div className="border-b dark:border-neutral-800 border-neutral-200 px-0 sm:px-3 pb-8 pt-6">
            <Tags tags={tags} setTags={setTags} />
          </div>
          <div className="text-center px-0 sm:px-3 pb-8 pt-6">
            <Submit
              handleBack={handleBack}
              tiping={typing}
              isSubmitting={isSubmitting}
            />
          </div>
        </form>
      </section>
    </>
  );
}
