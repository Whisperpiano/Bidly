import { PiCameraPlusFill, PiPlusBold } from "react-icons/pi";
import { MediaInput } from "../../pages/Create";
import { Dispatch, SetStateAction, useState } from "react";
import { uploadPicture } from "../../api/imgur/uploadPicture";

export default function DragDrop({
  setMedia,
  media,
}: {
  setMedia: Dispatch<SetStateAction<MediaInput[]>>;
  media: MediaInput[];
}) {
  const [loadingState, setLoadingState] = useState({
    dropzoneFile1: false,
    dropzoneFile2: false,
    dropzoneFile3: false,
    dropzoneFile4: false,
    dropzoneFile5: false,
  });
  const [imgurError, setImgurError] = useState<string | null>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      alert("Please upload a JPEG or PNG image");
      return;
    }

    try {
      setLoadingState((prev) => ({ ...prev, [event.target.id]: true }));
      const picture = await uploadPicture(file);

      if (!picture.link) {
        setImgurError("Error uploading the image");
        throw new Error("Error uploading the image");
      }

      const objectTemplate = {
        url: picture.link,
        alt: `Image for the ${event.target.id}`,
        id: event.target.id,
      };

      setMedia((prev) => {
        const existing = prev.find((item) => item.id === event.target.id);
        let updatedMedia;
        if (existing) {
          updatedMedia = prev.map((item) =>
            item.id === event.target.id ? { ...item, file } : item
          );
        } else {
          updatedMedia = [...prev, objectTemplate];
        }

        return updatedMedia.sort((a, b) => {
          const idA = parseInt(a.id.split("-")[2]);
          const idB = parseInt(b.id.split("-")[2]);
          return idA - idB;
        });
      });
    } catch (error) {
      console.log(`Uknown error uploading image: ${error}`);
    } finally {
      setLoadingState((prev) => ({ ...prev, [event.target.id]: false }));
    }
  };

  function handleRemove(id: string) {
    setMedia((prev) => prev.filter((item) => item.id !== id));
  }
  console.log(loadingState);
  console.log(media);

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
        {imgurError && (
          <span className="text-xs font-normal animate-reveal dark:text-red-400 text-red-600">
            {imgurError}
          </span>
        )}
      </div>

      <div className="mt-1 flex items-center justify-center w-full">
        <label
          htmlFor="dropzoneFile1"
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
            id="dropzoneFile1"
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        <label
          htmlFor="dropzoneFile2"
          className=" flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiPlusBold
              size={15}
              className="dark:text-neutral-200 text-neutral-700 duration-0"
            />
            <p className="sr-only">Add more pictures</p>
          </div>

          <input
            id="dropzoneFile2"
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="dropzoneFile3"
          className=" flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiPlusBold
              size={15}
              className="dark:text-neutral-200 text-neutral-700 duration-0"
            />
            <p className="sr-only">Add more pictures</p>
          </div>

          <input
            id="dropzoneFile3"
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="dropzoneFile4"
          className=" flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiPlusBold
              size={15}
              className="dark:text-neutral-200 text-neutral-700 duration-0"
            />
            <p className="sr-only">Add more pictures</p>
          </div>

          <input
            id="dropzoneFile4"
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="dropzoneFile5"
          className="flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiPlusBold
              size={15}
              className="dark:text-neutral-200 text-neutral-700 duration-0"
            />
            <p className="sr-only">Add more pictures</p>
          </div>

          <input
            id="dropzoneFile5"
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <button type="button" onClick={() => handleRemove("dropzone-file-1")}>
          Remove 1
        </button>
        <button type="button" onClick={() => handleRemove("dropzone-file-2")}>
          Remove 2
        </button>
        <button type="button" onClick={() => handleRemove("dropzone-file-3")}>
          Remove 3
        </button>
        <button type="button" onClick={() => handleRemove("dropzone-file-4")}>
          Remove 4
        </button>
        <button type="button" onClick={() => handleRemove("dropzone-file-5")}>
          Remove 5
        </button>
        <p>{loadingState.dropzoneFile1 && "Loading 1..."}</p>
        <p>{loadingState.dropzoneFile2 && "Loading 2..."}</p>
        <p>{loadingState.dropzoneFile3 && "Loading 3..."}</p>
        <p>{loadingState.dropzoneFile4 && "Loading 4..."}</p>
        <p>{loadingState.dropzoneFile5 && "Loading 5..."}</p>
      </div>
    </>
  );
}

// const [imgurError, setImgurError] = useState<string | null>(null);
// const [picture, setPicture] = useState<string | null>(null);

// const handleFileChangeAndUpload = async (
//   event: React.ChangeEvent<HTMLInputElement>
// ) => {
//   const file = event.target.files?.[0];
//   if (!file) return;

//   if (file.type !== "image/jpeg" && file.type !== "image/png") {
//     alert("Please upload a JPEG or PNG image");
//     return;
//   }

//   try {
//     const picture = await uploadPicture(file);

//     if (!picture.link) {
//       setImgurError("Something went wrong uploading the image");
//       throw new Error("Something went wrong uploading the image");
//     }

//     setPicture(picture.link);
//   } catch (error) {
//     console.log(`Uknown error uploading image: ${error}`);
//   }
// };
