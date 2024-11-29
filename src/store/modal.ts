import { create } from "zustand";

interface ModalState {
  isLoginOpen: boolean;
  handleLoginOpen: () => void;
  handleLoginClose: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isLoginOpen: false,
  handleLoginOpen: () => set({ isLoginOpen: true }),
  handleLoginClose: () => set({ isLoginOpen: false }),
}));
