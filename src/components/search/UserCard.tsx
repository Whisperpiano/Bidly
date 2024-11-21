import { PiSealCheckFill } from "react-icons/pi";

export default function UserCard() {
  return (
    <article className="border dark:border-neutral-800 border-neutral-200 rounded-lg p-2">
      <header>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder"
            className="w-full h-[120px] object-cover object-center rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder"
            className="aspect-square w-14 object-cover object-center rounded-lg absolute bottom-0 left-2 translate-y-1/2 z-10"
          />
        </div>
      </header>
      <div className="flex items-center justify-between mt-8">
        <div>
          <span className="  pl-3 flex items-center gap-1 text-sm font-semibold dark:text-neutral-50 text-neutral-900 ">
            username
            <PiSealCheckFill className="text-yellow-400 " />
          </span>
          <span className="pl-3 flex items-center gap-1 text-sm font-semibold dark:text-neutral-400 text-neutral-500 ">
            17 listings
          </span>
        </div>
        <button className="p-2 rounded-lg text-sm font-semibold dark:bg-neutral-50 dark:text-neutral-800 dark:hover:bg-neutral-300 ">
          View profile
        </button>
      </div>
    </article>
  );
}
