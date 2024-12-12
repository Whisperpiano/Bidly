import { useEffect } from "react";
import { useAuthStore } from "../../store/user";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils/ScrollTop";
import { toast } from "sonner";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmLogout({ isOpen, onClose }: ModalProps) {
  const logout = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();

  function handleClose() {
    onClose();
  }

  function handleConfirm() {
    logout();
    onClose();
    navigate("/");
    scrollToTop();
    toast.info("You have been logged out successfully!");
  }

  function handleCancel() {
    onClose();
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
      onClick={handleClose}
    >
      <div className="flex overflow-hidden max-w-sm dark:bg-neutral-900 bg-neutral-50 rounded-lg p-6">
        <div className="flex flex-col gap-3 w-[320px]">
          <h2 className="pb-1.5 text-center text-xl font-semibold dark:text-neutral-50 text-neutral-900">
            Sign out
          </h2>
          <p className="text-center pb-3 text-sm dark:text-neutral-50 text-neutral-900">
            Are you sure you want to sign out?
          </p>
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-lg text-sm flex items-center gap-2 h-[42px] bg-neutral-200/50 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 w-full justify-center font-semibold "
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="rounded-lg text-sm flex items-center gap-2 h-[42px] dark:bg-red-900 dark:text-red-50 dark:border-red-900 bg-red-300 text-neutral-900 border-red-200 hover:bg-red-400 w-full dark:hover:bg-red-800 justify-center font-semibold "
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
