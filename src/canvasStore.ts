import { create } from 'zustand';
import { Dimensions } from 'types/cubeTypes';

type TStore = {
  canvas?: HTMLCanvasElement;
  context?: CanvasRenderingContext2D;
  dimensions: Dimensions;

  setCanvas: (canvas?: HTMLCanvasElement) => void;
  setContext: (context?: CanvasRenderingContext2D) => void;
};

export const useCanvasStore = create<TStore>((set) => ({
  canvas: undefined,
  context: undefined,
  dimensions: [],

  setCanvas: (canvas) => set({ canvas }),
  setContext: (context) => set({ context }),
}));
