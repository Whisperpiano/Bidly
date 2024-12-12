import { useState, useRef } from "react";
import { toast } from "sonner";

function useCopyToClipboard(timeoutDuration = 2000) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>();

  const copyToClipboard = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    toast.success("Link copied to clipboard!");

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, timeoutDuration);
  };

  return { isCopied, copyToClipboard };
}

export default useCopyToClipboard;
