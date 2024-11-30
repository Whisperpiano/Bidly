import { useState } from "react";
import { Media } from "../../types/types";

export default function Gallery({ media }: { media: Media[] }) {
  const [selectedPicture, setSelectedPicture] = useState<string>("");

  function handleChangePicture(
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) {
    if (event.currentTarget.src === selectedPicture) return;
    setSelectedPicture(event.currentTarget.src);
  }

  return (
    <article>
      <div>
        <img
          src={media[0]?.url}
          alt={`Image view`}
          className="w-full aspect-video object-cover object-center rounded-lg"
        />
      </div>

      {media.length > 1 && (
        <div className="grid grid-cols-5 gap-2 mt-2 ">
          {media.map((picture, index) => (
            <div key={index}>
              <img
                src={picture.url}
                alt="alt placeholder"
                className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
                onClick={handleChangePicture}
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
