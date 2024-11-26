import { useEffect, useRef, useState } from "react";
import HamburgerButton from "../elements/HamburguerButton";

export default function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <section className="block sm:hidden relative" ref={menuRef}>
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`fixed top-[87px] left-0  h-screen bg-neutral-950 transition-all duration-800 ${
          isOpen ? " opacity-100 w-full" : " opacity-0 w-0 "
        }`}
      >
        <h2 className={`${isOpen && "animate-reveal"}`}>My profile</h2>
        <h2 className={`${isOpen && "animate-reveal"}`}>Create a list</h2>
        <h2 className={`${isOpen && "animate-reveal"}`}>Explore</h2>
        <h2 className={`${isOpen && "animate-reveal"}`}>Settings</h2>
        <h2 className={`${isOpen && "animate-reveal"}`}>Language</h2>
        <h2 className={`${isOpen && "animate-reveal"}`}>DarkMode</h2>
        <h2 className={`${isOpen && "animate-reveal"}`}>Logout</h2>
      </div>
    </section>
  );
}
