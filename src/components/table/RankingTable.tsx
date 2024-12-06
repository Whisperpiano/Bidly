import { useProfiles } from "../../hooks/profiles/useProfiles";
import SectionHeader from "../home/SectionHeader";
import TableContent from "./TableContent";

export default function RankingTable() {
  const { profiles, isLoading } = useProfiles({
    limit: 10,
    page: 1,
    sort: "credits",
    sortOrder: "desc",
  });
  const firstTableProfiles = profiles.slice(0, 5);
  const secondTableProfiles = profiles.slice(5, 10);

  console.log(isLoading);

  return (
    <section className="rounded-lg sm:border dark:border-neutral-800 border-neutral-200 my-10 sm:p-6 ">
      <SectionHeader title="Trending users" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <table className="w-full text-left dark:text-neutral-400 text-neutral-500 ">
          <TableContent profiles={firstTableProfiles} />
        </table>
        <table className=" hidden lg:block w-full text-left dark:text-neutral-400 text-neutral-500 ">
          <TableContent profiles={secondTableProfiles} />
        </table>
      </div>
    </section>
  );
}
