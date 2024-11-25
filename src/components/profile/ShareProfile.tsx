import { PiShareNetworkFill, PiCheckBold } from "react-icons/pi";
import Button from "../layer/Button";
import { useRef, useState } from "react";

export default function ShareProfile() {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>();

  const copyToClipboard = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Button
      type="outlined"
      ariaLabel="Share profile"
      handleClick={copyToClipboard}
    >
      <span className="sr-only">Share profile</span>
      {isCopied ? (
        <PiCheckBold size={16} className="dark:text-blue-400 text-blue-600" />
      ) : (
        <PiShareNetworkFill />
      )}
    </Button>
  );
}
