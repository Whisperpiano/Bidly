import { PiArrowRightBold } from "react-icons/pi";
import Button from "../layer/Button";
import RankedUser from "./RankedUser";

export default function RankingTable() {
  return (
    <section className="rounded-lg border dark:border-neutral-800 border-neutral-200 my-10 p-6">
      <header>
        <h2 className="text-xl font-semibold  border-b dark:border-neutral-800 border-neutral-200 pb-6 dark:text-neutral-50 text-neutral-900 ">
          Trending users
        </h2>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <table className="w-full text-left dark:text-neutral-400 text-neutral-500 ">
          <thead className="text-xs font-semibold  uppercase border-b dark:border-neutral-800 border-neutral-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-6 dark:text-neutral-400 text-neutral-500 duration-0"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-6 w-full dark:text-neutral-400 text-neutral-500 duration-0"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-center dark:text-neutral-400 text-neutral-500 duration-0"
              >
                Items
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-center dark:text-neutral-400 text-neutral-500 duration-0"
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
        </table>
        <table className=" hidden lg:block w-full text-left dark:text-neutral-400 text-neutral-500 ">
          <thead className="text-xs font-semibold uppercase border-b dark:border-neutral-800 border-neutral-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-6 dark:text-neutral-400 text-neutral-500 duration-0"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-6 w-full dark:text-neutral-400 text-neutral-500 duration-0"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-center dark:text-neutral-400 text-neutral-500 duration-0"
              >
                Items
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-center dark:text-neutral-400 text-neutral-500 duration-0"
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
        </table>
      </div>
      <div className="pt-6">
        <Button type="secondary" ariaLabel="test">
          View all users
          <PiArrowRightBold className="dark:text-neutral-50 text-neutral-900 duration-0" />
        </Button>
      </div>
    </section>
  );
}
