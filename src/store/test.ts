import { create } from "zustand";

type TestState = {
  tests: string[];
  addTest: (newTest: string) => void;
  removeTest: (index: number) => void;
};

export const useTestStore = create<TestState>((set) => ({
  tests: ["Test 1", "Test 2", "Test 3"],
  addTest: (newTest: string) =>
    set((state) => ({ tests: [...state.tests, newTest] })),
  removeTest: (index: number) =>
    set((state) => ({
      tests: state.tests.filter((_, i) => i !== index),
    })),
}));
