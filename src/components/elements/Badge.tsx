export default function Badge({ text }: { text: string }) {
  return (
    <span className="bg-neutral-800 text-sm text-neutral-300 rounded-lg px-2 py-1">
      {text}
    </span>
  );
}
