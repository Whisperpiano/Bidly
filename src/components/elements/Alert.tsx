import { PiInfoFill } from "react-icons/pi";

interface AlertProps {
  text: string;
  type: "success" | "error" | "information";
}

export default function Alert({ text, type }: AlertProps) {
  const baseStyle =
    "flex items-center gap-2 rounded-lg border py-3 px-3 text-sm";

  const typeStyle = {
    success:
      "dark:bg-green-950/75 dark:text-green-50 dark:border-green-800 bg-green-100 text-green-900 border-green-200",
    error:
      "dark:bg-red-950/75 dark:text-red-50 dark:border-red-900 bg-red-100 text-red-900 border-red-200",
    information:
      "dark:bg-primary-950 dark:text-primary-50 dark:border-primary-800 bg-primary-100 text-primary-900 border-primary-200",
  };

  return (
    <div className={`${baseStyle} ${typeStyle[type]}`}>
      <PiInfoFill />
      <span className="sr-only">{type} box</span>
      <p>{text}</p>
    </div>
  );
}
