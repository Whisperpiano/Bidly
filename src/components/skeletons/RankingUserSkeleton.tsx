import { PiImageFill } from "react-icons/pi";

export default function RankedUserSkeleton() {
  const randomWidth = Math.floor(Math.random() * 100) + 50;
  return (
    <>
      <tr>
        <th
          scope="row"
          className="hidden sm:table-cell px-2 sm:px-6 py-3 xs:py-4 font-bold whitespace-nowrap"
        >
          <div className=" bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-2 my-2.5 "></div>
        </th>
        <td className="mx-2 xs:mx-6 py-3 xs:py-4 flex items-center gap-4">
          <div className="aspect-square w-14 object-cover object-center rounded-lg bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 flex items-center justify-center">
            <PiImageFill
              size={18}
              className="dark:text-neutral-300 text-neutral-600 duration-0 "
            />
          </div>
          <div
            className={`bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2 flex items-center gap-1`}
            style={{ width: `${randomWidth}px` }}
          ></div>
        </td>
        <td className="mx-2 sm:mx-6 py-3 xs:py-4 text-center">
          <div
            className={`mx-auto bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2 flex items-center gap-1 w-8`}
          ></div>
        </td>
        <td className="mx-2 sm:mx-6 py-3 xs:py-4">
          <div
            className={`mx-auto bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2 flex items-center gap-1 w-6`}
          ></div>
        </td>
      </tr>
    </>
  );
}
