import { Link } from "react-router-dom";
import { Media } from "../../types/types";
import TimeLeft from "../elements/TimeLeft";

export interface ProfileItemCardProps {
  id: string;
  title: string;
  description: string;
  created: string;
  endsAt: string;
  updated: string;
  media: Media[];
  tags: string[];
}

export default function ProfileItemCard({
  item,
}: {
  item: ProfileItemCardProps;
}) {
  const { id, title, description, endsAt, media } = item;

  return (
    <Link
      to={`/listing/${title.toLocaleLowerCase().split(" ").join("-")}?id=${id}`}
      aria-label={`View details for the ${title} item`}
      viewTransition
    >
      <article className="border dark:border-neutral-800 border-neutral-200 rounded-lg p-2">
        <div>
          <img
            src={
              media.length > 0 ? media[0].url : "https://placehold.co/260x160"
            }
            alt={`Image of the ${title} listing`}
            className="aspect-[16/10] w-full h-full object-cover object-center rounded-lg "
          />
        </div>

        <div className="py-3">
          <h3 className="text-base xs:text-lg font-semibold dark:text-neutral-50 text-neutral-900 truncate">
            {title}
          </h3>

          <span className="block text-xs xs:text-sm font-normal dark:text-neutral-400 text-neutral-500 gap-1 truncate ">
            {description || "No description provided"}
          </span>
        </div>

        <footer className="dark:bg-neutral-900 bg-neutral-100 rounded-lg p-3 ">
          <div className="flex items-center justify-between">
            <span className="dark:text-neutral-400 text-neutral-600 font-semibold text-xs xs:text-sm">
              Finishing
            </span>
            <TimeLeft endsAt={endsAt} />
          </div>
        </footer>
      </article>
    </Link>
  );
}
