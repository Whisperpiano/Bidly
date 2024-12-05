import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { PiCameraPlusFill, PiPlusBold } from "react-icons/pi";
import { CreateInputs } from "../../pages/Create";
import { useState } from "react";
import { uploadPicture } from "../../api/imgur/uploadPicture";

export default function DragDrop({
  register,
  errors,
  watch,
}: {
  register: UseFormRegister<CreateInputs>;
  errors: FieldErrors<CreateInputs>;
  watch: UseFormWatch<CreateInputs>;
}) {
  const [imgurError, setImgurError] = useState<string | null>(null);
  const [picture, setPicture] = useState<string | null>(null);

  const handleFileChangeAndUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      alert("Please upload a JPEG or PNG image");
      return;
    }

    try {
      const picture = await uploadPicture(file);

      if (!picture.link) {
        setImgurError("Something went wrong uploading the image");
        throw new Error("Something went wrong uploading the image");
      }

      setPicture(picture.link);
    } catch (error) {
      console.log(`Uknown error uploading image: ${error}`);
    }
  };

  console.log(picture);
  console.log(imgurError);
  console.log(errors);

  return (
    <>
      <h2 className="mb-3 text-sm font-semibold uppercase dark:text-neutral-50 text-neutral-900">
        Pictures
      </h2>
      <p className="mb-3 text-sm dark:text-neutral-50 text-neutral-900 ">
        Add up to 5 pictures and let the magic happen!
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium dark:text-neutral-400 text-neutral-500">
          0/5
        </span>
      </div>

      <div className="mt-1 flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file-1"
          className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiCameraPlusFill
              size={30}
              className="dark:text-neutral-200 text-neutral-700 duration-0"
            />
            <p className="mb-2 text-sm dark:text-neutral-200 text-neutral-700">
              Click to upload or drag and drop
            </p>
            <p className="text-xs  dark:text-neutral-400 text-neutral-500">
              JPG or PNG (MAX. 10mb)
            </p>
          </div>
          <input
            {...register("media.file1")}
            id="dropzone-file-1"
            type="file"
            className="hidden"
            onChange={handleFileChangeAndUpload}
          />
        </label>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {watch("media.file1") !== undefined && (
          <label
            htmlFor="dropzone-file-2"
            className="animate-reveal flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
              <PiPlusBold
                size={15}
                className="dark:text-neutral-200 text-neutral-700 duration-0"
              />
              <p className="sr-only">Add more pictures</p>
            </div>

            <input
              {...register("media.file2")}
              id="dropzone-file-2"
              type="file"
              className="hidden"
              disabled={watch("media.file1") === undefined}
            />
          </label>
        )}

        {watch("media.file2") !== undefined && (
          <label
            htmlFor="dropzone-file-3"
            className="animate-reveal flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
              <PiPlusBold
                size={15}
                className="dark:text-neutral-200 text-neutral-700 duration-0"
              />
              <p className="sr-only">Add more pictures</p>
            </div>

            <input
              {...register("media.file3")}
              id="dropzone-file-3"
              type="file"
              className="hidden"
              disabled={watch("media.file2") === undefined}
            />
          </label>
        )}

        {watch("media.file3") !== undefined && (
          <label
            htmlFor="dropzone-file-4"
            className="animate-reveal flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
              <PiPlusBold
                size={15}
                className="dark:text-neutral-200 text-neutral-700 duration-0"
              />
              <p className="sr-only">Add more pictures</p>
            </div>

            <input
              {...register("media.file4")}
              id="dropzone-file-4"
              type="file"
              className="hidden"
              disabled={watch("media.file3") === undefined}
            />
          </label>
        )}

        {watch("media.file4") !== undefined && (
          <label
            htmlFor="dropzone-file-5"
            className="animate-reveal flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
              <PiPlusBold
                size={15}
                className="dark:text-neutral-200 text-neutral-700 duration-0"
              />
              <p className="sr-only">Add more pictures</p>
            </div>

            <input
              {...register("media.file5")}
              id="dropzone-file-5"
              type="file"
              className="hidden"
              disabled={watch("media.file4") === undefined}
            />
          </label>
        )}
      </div>
    </>
  );
}
