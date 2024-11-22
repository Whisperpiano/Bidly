import Button from "../layer/Button";
export default function Submit() {
  return (
    <>
      <p className="py-3 text-xl font-semibold dark:text-neutral-50">
        No money, no worries!
      </p>
      <p className=" text-sm font-normal dark:text-neutral-300 text-pretty">
        When your item sells, you earn NOFF coins (our totally awesome, made-up
        currency). No hidden fees, no fine print, just pure trading fun. By
        clicking “Create item”, you agree to our rules (basically, play nice),
        take full responsabillity for your listing and let the magic of NOFF
        coins do the rest!
      </p>

      <div className="mb-3 flex flex-col gap-3 pt-6 max-w-[380px] mx-auto">
        <Button type="primary" ariaLabel="Buy now">
          Create item
        </Button>
        <Button type="secondary" ariaLabel="Add to cart">
          Discard
        </Button>
      </div>
    </>
  );
}
