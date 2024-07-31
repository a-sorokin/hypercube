import { create } from 'zustand';

type TStore = {
  canvas?: HTMLCanvasElement;
  context?: CanvasRenderingContext2D;

  setCanvas: (canvas?: HTMLCanvasElement) => void;
  setContext: (context?: CanvasRenderingContext2D) => void;
};

export const useCanvasStore = create<TStore>((set) => ({
  canvas: undefined,
  context: undefined,

  setCanvas: (canvas) => set({ canvas }),
  setContext: (context) => set({ context }),
}));
