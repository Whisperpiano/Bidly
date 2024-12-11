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
        <div className="flex flex-col gap-3">
          <p>Are you sure you want to sign out?</p>
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-lg text-sm flex items-center gap-2 h-[42px] bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full justify-center font-semibold "
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="rounded-lg text-sm flex items-center gap-2 h-[42px] bg-red-600 text-neutral-900 dark:bg-red-400 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full justify-center font-semibold "
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
