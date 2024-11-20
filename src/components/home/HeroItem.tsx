import { Link } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";

export default function HeroItem({ isMain }: { isMain: boolean }) {
  // Just put `/listing/culo-name-test?id=1&img=${img.id}` in the link, and viewTransition will work
  // Also put the style to the img
  return (
    <Link to={`/listing/culo-name-test?id=1`}>
      <article
        className={`rounded-lg overflow-hidden relative ${
          isMain ? "h-[400px]" : "aspect-video w-full"
        } `}
      >
        <img
          src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="culo"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 z-10 flex items-end ">
          <div className="py-6 px-3 w-full bg-neutral-900/80 backdrop-blur-xl flex items-center justify-between">
            <div>
              <h1 className="dark:text-neutral-50 text-xl font-bold">
                Title lorem ipsum
              </h1>
              <p className="dark:text-neutral-300 text-base font-semibold flex items-center gap-1">
                username
                <span>
                  <PiSealCheckFill className="text-yellow-400" />
                </span>
              </p>
            </div>
            <div>
              <p className="dark:text-neutral-300 font-semibold text-base flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full bg-green-400"
                  aria-hidden
                ></div>
                6d 12h
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
