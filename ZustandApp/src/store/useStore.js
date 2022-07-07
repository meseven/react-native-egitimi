import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = (set) => ({
	count: 0,
	increase: () => set((state) => ({ count: state.count + 1 })),
});

export default create(devtools(useStore));
