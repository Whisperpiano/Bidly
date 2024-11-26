type ButtonType = "primary" | "secondary" | "tertiary" | "outlined" | "filter";

interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  handleClick?: () => void;
  ariaLabel?: string;
}

export default function Button({
  type,
  children,
  handleClick,
  ariaLabel,
}: ButtonProps) {
  const baseStyle =
    "rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] ";

  const typeStyle = {
    primary:
      "px-4 bg-primary-600 text-neutral-50 hover:bg-primary-700 justify-center font-semibold ",
    secondary:
      "bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full justify-center font-semibold ",
    tertiary:
      "bg-neutral-50 text-neutral-900 px-4 justify-center hover:bg-neutral-300 font-semibold ",
    outlined:
      "aspect-square justify-center border dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 dark:hover:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-900 text-neutral-600 border-neutral-100 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-700 hover:border-neutral-200 font-semibold ",
    filter:
      "flex gap-2 font-medium items-center text-sm font-medium p-3 rounded-lg dark:text-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 bg-neutral-200/50 text-neutral-900",
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyle} ${typeStyle[type]}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
