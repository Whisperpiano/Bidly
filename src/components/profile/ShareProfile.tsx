import { PiShareNetworkFill, PiCheckBold } from "react-icons/pi";
import Button from "../elements/Button";
import useCopyToClipboard from "../../hooks/general/useCopyToClipboard";

export default function ShareProfile() {
  const { isCopied, copyToClipboard } = useCopyToClipboard(4000);

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
        <PiShareNetworkFill className="dark:text-neutral-400 text-neutral-600 duration-0" />
      )}
    </Button>
  );
}
