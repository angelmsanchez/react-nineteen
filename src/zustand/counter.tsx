import { create } from 'zustand';

interface CountState {
  count: number;
  increase: () => void;
  reset: () => void;
}

export const useCountStore = create<CountState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));
