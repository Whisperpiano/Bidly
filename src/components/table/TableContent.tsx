import RankedUser from "./RankedUser";

export default function TableContent() {
  return (
    <>
      <thead className="text-xs font-semibold  uppercase border-b dark:border-neutral-800 border-neutral-200">
        <tr>
          <th
            scope="col"
            className="hidden sm:block px-6 py-6 dark:text-neutral-400 text-neutral-500 duration-0"
          >
            #
          </th>
          <th
            scope="col"
            className="px-2 xs:px-6 py-6 w-full dark:text-neutral-400 text-neutral-500 duration-0"
          >
            User
          </th>
          <th
            scope="col"
            className="px-2 xs:px-6 py-6 text-center dark:text-neutral-400 text-neutral-500 duration-0"
          >
            Items
          </th>
          <th
            scope="col"
            className="px-2 xs:px-6 py-6 text-center dark:text-neutral-400 text-neutral-500 duration-0"
          >
            Wins
          </th>
        </tr>
      </thead>
      <tbody>
        <RankedUser />
        <RankedUser />
        <RankedUser />
        <RankedUser />
        <RankedUser />
      </tbody>
    </>
  );
}
