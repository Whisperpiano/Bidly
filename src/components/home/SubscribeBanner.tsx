import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from "../../api/resend/sendEmail";

interface NewsletterInput {
  email: string;
}

export default function SubscribeBanner() {
  const { register, handleSubmit, reset } = useForm<NewsletterInput>();

  const onSubmit: SubmitHandler<NewsletterInput> = async (data) => {
    try {
      const response = await sendEmail({ email: data.email });
      if (response.success) {
        alert("Email sent successfully");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      alert(`Something went wrong: ${error}. Try again later.`);
    } finally {
      reset();
    }
  };

  return (
    <section className="rounded-lg bg-primary-100 dark:bg-primary-950 my-10 px-6 xs:px-10 py-10 text-center">
      <h2 className="text-xl md:text-2xl font-bold dark:text-primary-50 text-neutral-900">
        Be the first to know
      </h2>
      <h3 className="text-xl md:text-2xl font-bold dark:text-primary-300 text-neutral-900/50">
        Access special auctions
      </h3>
      <form
        name="subscribe"
        className="flex mx-auto gap-2 max-w-[500px] py-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="subscribe" className="sr-only">
          Subscribe to our newsletter
        </label>
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
          id="subscribe"
          placeholder="Enter your email address"
          className="w-full h-[36px] md:h-[42px] dark:bg-primary-900 text-sm bg-primary-200 dark:text-neutral-50 text-neutral-900 dark:placeholder:text-primary-200 placeholder:text-neutral-600/50 px-4 rounded-lg outline-none border dark:border-primary-900  border-primary-200 dark:focus:border-neutral-200 focus:border-primary-400/50 dark:hover:bg-primary-800  dark:focus:bg-primary-800 focus:bg-primary-100 hover:border-primary-400/50"
          autoComplete="off"
        />
        <button
          type="submit"
          className="rounded-lg text-sm flex items-center gap-2 h-[36px] md:h-[42px]  px-4 justify-center dark:hover:bg-neutral-300 dark:bg-neutral-50 dark:text-neutral-900 bg-neutral-800 text-neutral-50 hover:bg-neutral-600 font-medium"
          aria-label="Subscribe to our newsletter"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs dark:text-primary-200 text-primary-600 max-w-[500px] mx-auto">
        Subscribe to receive occasional emails about our events and featured
        items. You are free to unsubscribe at any time.
      </p>
    </section>
  );
}
