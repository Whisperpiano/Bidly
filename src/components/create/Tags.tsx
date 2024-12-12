import { PiPlusBold } from "react-icons/pi";
import DismissibleBadge from "../elements/DismissibleBadge";
import { Dispatch, SetStateAction, useRef } from "react";
export default function Tags({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddTag() {
    const newTag = inputRef.current?.value.trim().split(" ").join("");

    if (!newTag || tags.includes(newTag)) {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return;
    }

    if (tags.length >= 3) {
      alert("You can only add up to 3 tags.");
      return;
    }

    setTags((prev) => [...prev, newTag]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  const handleRemoveTag = (index: number) => {
    setTags((prev) => {
      const updatedTags = prev.filter((_, i) => i !== index);
      return updatedTags;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTag();
    }
  };

  return (
    <>
      <h2 className="mb-3 text-sm font-semibold uppercase  dark:text-neutral-50 text-neutral-900">
        Tags
      </h2>
      <p className="mb-6 text-sm dark:text-neutral-50 text-neutral-900 ">
        Tag it up! Just 3, no more, no less.
      </p>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="tags" className="text-xs font-medium sr-only">
          Item tags
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="tags"
            className="p-3 rounded-lg border outline-none text-sm flex-1 dark:bg-neutral-950 dark:hover:bg-neutral-900/50 dark:border-neutral-800 dark:hover:border-neutral-500 dark:text-neutral-50 dark:focus:bg-neutral-900/50 dark:focus:border-neutral-500 dark:placeholder:text-neutral-500 bg-neutral-50 hover:bg-neutral-100 border-neutral-200 hover:border-neutral-400 focus:bg-neutral-100 focus:border-neutral-400 text-neutral-900 placeholder:text-neutral-500 focus:outline-none disabled:opacity-75 disabled:hover:border-bg-transparent"
            placeholder="Ex: jewelry"
            maxLength={24}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            disabled={tags.length >= 3}
          />
          <button
            type="button"
            className="p-2 w-[46px] rounded-lg border aspect-square grid place-items-center dark:text-neutral-300 bg-transparent dark:border-neutral-800 ml-auto dark:hover:bg-neutral-900 dark:hover:text-neutral-50 dark:hover:border-neutral-500 text-neutral-800 hover:bg-neutral-200/50 hover:text-neutral-900"
            onClick={handleAddTag}
            disabled={tags.length >= 3}
          >
            <span className="sr-only">Add tag</span>
            <PiPlusBold className="dark:text-neutral-300 text-neutral-800 duration-0" />
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <DismissibleBadge
              key={index}
              text={tag}
              onDismiss={() => handleRemoveTag(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
