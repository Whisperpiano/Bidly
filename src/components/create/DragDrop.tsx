import { PiCameraPlusFill } from "react-icons/pi";
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
    loading: false,
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
      setLoadingState({ loading: true });
      const picture = await uploadPicture(file);

      if (!picture.link) {
        setImgurError("Error uploading the image");
        throw new Error("Error uploading the image");
      }

      // Create the new image object with a temporary ID
      const objectTemplate = {
        url: picture.link,
        alt: `Image for ${file.name}`,
        id: `dropzoneFile${media.length + 1}`,
      };

      // Update the state with the new image
      setMedia((prev) => {
        const updatedMedia = [...prev, objectTemplate].slice(0, 5);

        // Renumber IDs to maintain sequence
        const renumberedMedia = updatedMedia.map((item, index) => ({
          ...item,
          id: `dropzoneFile${index + 1}`,
        }));

        return renumberedMedia;
      });
    } catch (error) {
      console.log(`Unknown error uploading image: ${error}`);
    } finally {
      setLoadingState({ loading: false });
    }
  };

  function handleRemove(id: string) {
    setMedia((prev) => {
      const updatedMedia = prev.filter((item) => item.id !== id);

      // Renumber IDs after deletion to keep them in order
      const renumberedMedia = updatedMedia.map((item, index) => ({
        ...item,
        id: `dropzoneFile${index + 1}`,
      }));

      return renumberedMedia;
    });
  }
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
            id="dropzoneFile"
            type="file"
            className="hidden"
            onChange={handleChange}
            disabled={media.length >= 5}
          />
        </label>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-2">
        {media.map((image, index) => (
          <div
            key={image.id}
            className="flex flex-col items-center justify-center aspect-video w-full border-2 border-dashed rounded-lg dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => handleRemove(image.id)}
              className="text-xs font-normal text-red-600 mt-2"
            >
              Remove
            </button>
            <span>{index === 0 && "MAIN IMAGE"}</span>
          </div>
        ))}
      </div>

      <div>{loadingState.loading && <p>Uploading...</p>}</div>
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
