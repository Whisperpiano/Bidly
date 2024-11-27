export default function SectionHeader({ title }: { title: string }) {
  return (
    <header>
      <h2 className="text-lg xs:text-xl font-semibold  border-b dark:border-neutral-800 border-neutral-200 pb-6 dark:text-neutral-50 text-neutral-900 ">
        {title}
      </h2>
    </header>
  );
}
