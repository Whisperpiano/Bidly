import { PiSealCheckFill } from "react-icons/pi";
import ProfileStats from "./ProfileStats";
import ProfileOptions from "./ProfileOptions";
import ShareProfile from "./ShareProfile";

export default function ProfileBanner() {
  return (
    <>
      <div className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1667912925305-629794bdb691?q=80&w=2621&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt placeholder 8"
          className="h-[300px] w-full object-cover object-center rounded-lg"
        />
        <ProfileStats />
      </div>
      {/* Profile */}
      <div className="flex justify-between p-6 -translate-y-1/2">
        <div className="flex items-end gap-4">
          <img
            src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder 1"
            className="aspect-square w-28 object-cover object-center rounded-lg border dar:border-neutral-950 border-neutral-50"
          />
          <div className="flex gap-1 items-center mb-2">
            <h1 className="text-xl font-semibold">username</h1>
            <PiSealCheckFill size={16} className="text-yellow-400" />
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <ShareProfile />
          <ProfileOptions />
        </div>
      </div>
    </>
  );
}
