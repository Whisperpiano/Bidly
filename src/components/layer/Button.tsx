type ButtonType = "primary" | "secondary" | "outlined";

interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function Button({
  type,
  children,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const baseStyle =
    "rounded-lg text-sm font-semibold flex items-center gap-2 h-[42px]";

  const typeStyle = {
    primary: "px-4 bg-primary-600 text-neutral-50 hover:bg-primary-700",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
    outlined:
      "aspect-square justify-center border dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 dark:hover:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-900 text-neutral-600 border-neutral-100 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-700 hover:border-neutral-200",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${typeStyle[type]}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
