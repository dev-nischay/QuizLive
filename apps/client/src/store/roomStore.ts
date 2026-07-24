import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";
export type RoomStore = {
  roomCode: string | null;
  setRoomCode: (roomCode: string) => void;
  reset: () => void;
};

export const useRoomStore = create<RoomStore>()(
  persist(
    (set) => ({
      roomCode: null,

      setRoomCode: (roomCode) => {
        set({ roomCode });
      },

      reset: () => {
        set({ roomCode: null });
      },
    }),
    {
      name: "roomCode",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        roomCode: state.roomCode,
      }),
    },
  ),
);
