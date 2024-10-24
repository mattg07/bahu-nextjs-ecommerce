// store/useStore.ts
import { create } from "zustand";
interface StoreState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
