import Button from "../layer/Button";

export default function SubscribeBanner() {
  return (
    <section className="rounded-lg bg-primary-950 my-10 p-10 text-center">
      <h2 className="text-2xl font-bold text-primary-50">
        Be the first to know
      </h2>
      <h3 className="text-2xl font-bold text-primary-300">
        Access special auctions
      </h3>
      <form name="subscribe" className="flex mx-auto gap-2 max-w-[500px] py-6">
        <label htmlFor="subscribe" className="sr-only">
          Subscribe
        </label>
        <input
          type="email"
          id="subscribe"
          placeholder="Enter your email address"
          className="w-full bg-primary-900   text-neutral-50 placeholder:text-primary-200 px-4 rounded-lg outline-none border border-primary-900 focus:border-neutral-200 hover:bg-primary-800 focus:bg-primary-800"
        />
        <Button type="tertiary" ariaLabel="Subscribe to our newsletter">
          Subscribe
        </Button>
      </form>
      <p className="text-xs text-primary-200 max-w-[500px] mx-auto">
        Subscribe to receive occasional emails about our events and featured
        items. You are free to unsubscribe at any time.
      </p>
    </section>
  );
}
