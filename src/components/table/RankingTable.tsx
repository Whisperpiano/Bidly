import { PiArrowRightBold } from "react-icons/pi";
import Button from "../layer/Button";
import RankedUser from "./RankedUser";

export default function RankingTable() {
  return (
    <section className="rounded-lg border dark:border-neutral-800 border-neutral-200 my-10 p-6">
      <header>
        <h2 className="text-xl font-semibold  border-b dark:border-neutral-800 border-neutral-200 pb-6 dark:text-neutral-50">
          Trending users
        </h2>
      </header>
      <div className="grid grid-cols-2 gap-10">
        <table className="w-full text-left dark:text-neutral-400 text-neutral-500 ">
          <thead className="text-xs font-semibold dark:text-neutral-400 text-neutral-500 uppercase border-b dark:border-neutral-800 border-neutral-200">
            <tr>
              <th scope="col" className="px-6 py-6">
                #
              </th>
              <th scope="col" className="px-6 py-6 w-full">
                User
              </th>
              <th scope="col" className="px-6 py-6 text-center">
                Items
              </th>
              <th scope="col" className="px-6 py-6 text-center">
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
        <table className="w-full text-left dark:text-neutral-400 text-neutral-500 ">
          <thead className="text-xs font-semibold dark:text-neutral-400 text-neutral-500 uppercase border-b dark:border-neutral-800 border-neutral-200">
            <tr>
              <th scope="col" className="px-6 py-6">
                #
              </th>
              <th scope="col" className="px-6 py-6 w-full">
                User
              </th>
              <th scope="col" className="px-6 py-6 text-center">
                Items
              </th>
              <th scope="col" className="px-6 py-6 text-center">
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
          <PiArrowRightBold />
        </Button>
      </div>
    </section>
  );
}
