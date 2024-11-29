import { HERO_BANNER } from "../../lib/constants";
import AuthGuardLink from "../auth/AuthGuardLink";

export default function HeroBanner() {
  const { account, img, title, subtitle, buttonText, season } = HERO_BANNER;

  return (
    <section className="mt-9 rounded-lg overflow-hidden">
      <AuthGuardLink
        to={`/profile/${account}`}
        aria-label={`Go to the ${season} collection`}
      >
        <div className="relative">
          <img
            src={img}
            alt={`Promotional banner for the ${season} collection`}
            className="w-full aspect-square sm:h-[380px] object-cover object-center rounded-lg "
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center sm:items-start justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-neutral-900/50">
            <div className="max-w-[450px] ">
              <h1 className="text-2xl xs:text-3xl md:text-3xl font-bold text-neutral-50 mb-3">
                {title}
              </h1>
              <p className="text-sm xs:text-base text-neutral-50 mb-5">
                {subtitle}
              </p>
              <button
                aria-label={`Go to the ${season} collection`}
                className="rounded-lg text-sm flex items-center gap-2 h-[36px] xs:h-[42px] px-4 justify-center text-neutral-950 bg-neutral-50 hover:bg-neutral-300 font-medium"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </AuthGuardLink>
    </section>
  );
}
