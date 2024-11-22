import { useEffect, useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: ModalProps) {
  const [currentView, setCurrentView] = useState("login");

  const handleViewChange = (view: "login" | "register") => {
    setCurrentView(view);
  };

  function handleClose() {
    setCurrentView("login");
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
  console.log(currentView);

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 bg-opacity-75 p-5 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="flex overflow-hidden max-w-sm bg-neutral-900 rounded-lg">
        <div
          className={`min-w-full transition-all ease-out duration-200 ${
            currentView === "login"
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-full opacity-0 scale-50"
          }`}
        >
          <Login onClose={handleClose} handleViewChange={handleViewChange} />
        </div>
        <div
          className={`min-w-full transition-all ease-out duration-200 ${
            currentView === "register"
              ? "-translate-x-full opacity-100 scale-100"
              : "translate-x-0 opacity-0 scale-50"
          }`}
        >
          <Register handleViewChange={handleViewChange} />
        </div>
      </div>
    </section>
  );
}
