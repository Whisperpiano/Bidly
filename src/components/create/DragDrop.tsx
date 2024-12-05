import { PiCameraPlusFill, PiXBold } from "react-icons/pi";
import { MediaInput } from "../../pages/Create";
import { Dispatch, SetStateAction, useState } from "react";
import { uploadPicture } from "../../api/imgur/uploadPicture";
import Spinner from "../elements/Spinner";

export default function DragDrop({
  setMedia,
  media,
}: {
  setMedia: Dispatch<SetStateAction<MediaInput[]>>;
  media: MediaInput[];
}) {
  const [loadingState, setLoadingState] = useState(false);
  const [imgurError, setImgurError] = useState<string | null>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      alert("Please upload a JPEG or PNG image");
      return;
    }

    try {
      setLoadingState(true);
      const picture = await uploadPicture(file);

      if (!picture.link) {
        setImgurError("Error uploading the image");
        throw new Error("Error uploading the image");
      }

      const objectTemplate = {
        url: picture.link,
        alt: `Image for ${file.name}`,
        id: `dropzoneFile${media.length + 1}`,
      };

      setMedia((prev) => {
        const updatedMedia = [...prev, objectTemplate].slice(0, 5);

        const renumberedMedia = updatedMedia.map((item, index) => ({
          ...item,
          id: `dropzoneFile${index + 1}`,
        }));

        return renumberedMedia;
      });
    } catch (error) {
      console.log(`Unknown error uploading image: ${error}`);
    } finally {
      setLoadingState(false);
    }
  };

  function handleRemove(id: string) {
    setMedia((prev) => {
      const updatedMedia = prev.filter((item) => item.id !== id);

      const renumberedMedia = updatedMedia.map((item, index) => ({
        ...item,
        id: `dropzoneFile${index + 1}`,
      }));

      return renumberedMedia;
    });
  }

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
          {media.length}/5
        </span>
        {imgurError && (
          <span className="text-xs font-normal animate-reveal dark:text-red-400 text-red-600">
            {imgurError}
          </span>
        )}
      </div>

      <div className="mt-1 flex items-center justify-center w-full">
        <label
          htmlFor="dropzoneFile"
          className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            {loadingState ? (
              <Spinner />
            ) : (
              <>
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
              </>
            )}
          </div>
          <input
            id="dropzoneFile"
            type="file"
            className="hidden"
            onChange={handleChange}
            disabled={media.length >= 5 || loadingState}
          />
        </label>
      </div>

      <div className="grid grid-cols-4 gap-y-2 mt-3">
        {media.map((image, index) => (
          <div
            key={image.id}
            className={`relative animate-reveal flex items-center justify-between w-full rounded-lg ${
              index === 0 ? "col-span-5 px-1.5" : "px-1.5"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className={` w-full object-cover rounded-lg ${
                index === 0 ? "aspect-[16/5]" : "aspect-square"
              }`}
            />
            <div
              className={`transition-opacity duration-300 opacity-100 hover:opacity-100 absolute inset-0 rounded-lg mx-1.5 dark:bg-neutral-900/50 bg-neutral-200/50`}
            >
              <button
                className="absolute top-1.5 right-1.5 dark:bg-neutral-700 dark:hover:bg-neutral-600 bg-neutral-700 hover:bg-neutral-800 p-1.5 rounded-full"
                type="button"
                onClick={() => handleRemove(image.id)}
              >
                <span className="sr-only">Remove the picture {index + 1}</span>
                <PiXBold
                  size={14}
                  className="text-neutral-50 dark:text-neutral-50 duration-0 "
                />
              </button>

              {index === 0 && (
                <span className="absolute top-1.5 left-1.5 text-center uppercase text-xs font-semibold p-2 rounded-lg bg-primary-600 text-neutral-50 backdrop-blur-sm">
                  Main picture
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
