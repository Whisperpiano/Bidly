export default function Badge({ text }: { text: string }) {
  return (
    <span className="dark:bg-neutral-800 bg-neutral-100 text-sm dark:text-neutral-300 text-neutral-600 rounded-lg px-2 py-1">
      {text}
    </span>
  );
}
