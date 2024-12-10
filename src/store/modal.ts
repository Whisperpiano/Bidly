import { create } from "zustand";

interface ModalState {
  isLoginOpen: boolean;
  isPlaceABidOpen: boolean;
  handleLoginOpen: () => void;
  handleLoginClose: () => void;
  handlePlaceABidOpen: () => void;
  handlePlaceABidClose: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isLoginOpen: false,
  isPlaceABidOpen: false,
  handleLoginOpen: () => set({ isLoginOpen: true }),
  handleLoginClose: () => set({ isLoginOpen: false }),
  handlePlaceABidOpen: () => set({ isPlaceABidOpen: true }),
  handlePlaceABidClose: () => set({ isPlaceABidOpen: false }),
}));
