import { create } from "zustand";

interface CirclesState {
  isEnabled: boolean;
  toggle: () => void;
}

const useCircles = create<CirclesState>((set) => ({
  isEnabled: true,
  toggle: () => set((state) => ({ isEnabled: !state.isEnabled })),
}));

export default useCircles;
