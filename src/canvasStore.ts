import { create } from 'zustand';
import { DEFAULT_DIMENSION_DELTAS } from 'constants/dimensionConstants';
import { Dimensions } from 'types/cubeTypes';

type TStore = {
  canvas?: HTMLCanvasElement;
  context?: CanvasRenderingContext2D;
  dimensions: Dimensions;

  setCanvas: (canvas?: HTMLCanvasElement) => void;
  setContext: (context?: CanvasRenderingContext2D) => void;

  addDimension: () => void;
  removeDimension: () => void;
};

export const useCanvasStore = create<TStore>((set) => ({
  canvas: undefined,
  context: undefined,
  dimensions: [],

  setCanvas: (canvas) => set({ canvas }),
  setContext: (context) => set({ context }),

  addDimension: () => {
    set(({ dimensions }) => {
      const newDimension = DEFAULT_DIMENSION_DELTAS[dimensions.length];
      const newDimensions = [...dimensions, newDimension ?? DEFAULT_DIMENSION_DELTAS.at(-1)];
      return { dimensions: newDimensions };
    });
  },
  removeDimension: () => {
    set(({ dimensions }) => {
      const newDimensions = dimensions.toSpliced(-1);
      return { dimensions: newDimensions };
    });
  },
}));
