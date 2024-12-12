import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils/ScrollTop";
import { PiWarningCircleFill } from "react-icons/pi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmGoBack({ isOpen, onClose }: ModalProps) {
  const navigate = useNavigate();

  function handleConfirm() {
    onClose();
    navigate(-1);
    scrollToTop();
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 bg-opacity-75 p-5 backdrop-blur-sm animate-fastreveal"
      onClick={onClose}
    >
      <div className="flex overflow-hidden max-w-sm dark:bg-neutral-900 bg-neutral-50 rounded-lg p-6">
        <div className="flex flex-col gap-3 w-[320px]">
          <PiWarningCircleFill
            size={24}
            className="dark:text-neutral-50 text-neutral-900 duration-0 mx-auto"
          />
          <p className="text-center pb-3 text-sm dark:text-neutral-50 text-neutral-900">
            You’ve made changes that haven’t been saved yet. If you leave now,
            your changes will be lost. Do you want to proceed?
          </p>
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg text-sm flex items-center gap-2 h-[42px] bg-neutral-200/50 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 w-full justify-center font-semibold "
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="rounded-lg text-sm flex items-center gap-2 h-[42px] dark:bg-red-900 dark:text-red-50 dark:border-red-900 bg-red-300 text-neutral-900 border-red-200 hover:bg-red-400 w-full dark:hover:bg-red-800 justify-center font-semibold "
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
