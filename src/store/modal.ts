import { create } from "zustand";

interface ModalState {
  isLoginOpen: boolean;
  isPlaceABidOpen: boolean;
  isConfirmLogoutOpen: boolean;
  isGoBackOpen: boolean;
  handleLoginOpen: () => void;
  handleLoginClose: () => void;
  handlePlaceABidOpen: () => void;
  handlePlaceABidClose: () => void;
  handleConfirmLogoutOpen: () => void;
  handleConfirmLogoutClose: () => void;
  handleGoBackOpen: () => void;
  handleGoBackClose: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isLoginOpen: false,
  isPlaceABidOpen: false,
  isConfirmLogoutOpen: false,
  isGoBackOpen: false,
  handleLoginOpen: () => set({ isLoginOpen: true }),
  handleLoginClose: () => set({ isLoginOpen: false }),
  handlePlaceABidOpen: () => set({ isPlaceABidOpen: true }),
  handlePlaceABidClose: () => set({ isPlaceABidOpen: false }),
  handleConfirmLogoutOpen: () => set({ isConfirmLogoutOpen: true }),
  handleConfirmLogoutClose: () => set({ isConfirmLogoutOpen: false }),
  handleGoBackOpen: () => set({ isGoBackOpen: true }),
  handleGoBackClose: () => set({ isGoBackOpen: false }),
}));
