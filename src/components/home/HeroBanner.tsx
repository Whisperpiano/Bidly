import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="my-6 rounded-lg overflow-hidden">
      <Link to="/profile/bidlychristmas">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1513884923967-4b182ef167ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder"
            className="w-full aspect-square md:h-[380px] object-cover object-center rounded-lg "
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-center md:px-16 lg:px-20 xl:px-24 bg-neutral-900/50">
            <div className="max-w-[450px] ">
              <h1 className="text-3xl font-bold text-neutral-50 mb-3">
                Jingle bids, jingle bids, jingle all the way!
              </h1>
              <p className="text-base text-neutral-50 mb-5">
                Unwrap the joy of Christmas with our exclusive festive offers.
              </p>
              <button className="rounded-lg text-sm flex items-center gap-2 h-[42px] px-4 justify-center text-neutral-950 bg-neutral-50 hover:bg-neutral-300 font-medium">
                Shop deals
              </button>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
