import { useEffect, useState } from "react";
import { Media } from "../../types/types";

export default function Gallery({ media }: { media: Media[] }) {
  const [selectedPicture, setSelectedPicture] = useState<string>("");

  function handleChangePicture(
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) {
    if (event.currentTarget.src === selectedPicture) return;
    setSelectedPicture(event.currentTarget.src);
  }

  useEffect(() => {
    if (media.length > 0) {
      setSelectedPicture(media[0].url);
    } else {
      setSelectedPicture("https://placehold.co/1000x550");
    }
  }, [media]);

  return (
    <article>
      <div>
        <img
          src={selectedPicture}
          alt={"Main image placeholder"}
          className="w-full aspect-video object-cover object-center rounded-lg"
        />
      </div>

      {media.length > 1 && (
        <div className="grid grid-cols-5 gap-2 mt-2">
          {media.slice(0, 5).map((picture, index) => (
            <div key={index}>
              <img
                src={picture.url}
                alt={`Picture ${index + 1} of ${Math.min(media.length, 5)}`}
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
