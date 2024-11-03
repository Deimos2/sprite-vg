import { Pane } from 'tweakpane';
import { getOriginalImageData } from './imageUpload';

declare const cv: any;

export const setupFilterControls = () => {
  const container = document.getElementById('tweakpane');
  if (!container) {
    console.error('Tweakpane container not found');
    return;
  }

  const pane = new Pane({ container });
  const params = { threshold: 100 };

  pane.addBinding(params, 'threshold', { min: 0, max: 255 });

  pane.on('change', () => {
    applyFilter(params.threshold);
  });
};

const applyFilter = (threshold: number) => {
  const originalData = getOriginalImageData();
  if (!originalData) {
    console.warn('Original image data not found');
    return;
  }

  const canvas = document.getElementById('imageCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Canvas context not found');
    return;
  }

  // Reset canvas to original image before applying filter
  ctx.putImageData(originalData, 0, 0);

  const src = cv.imread('imageCanvas');
  const dst = new cv.Mat();
  cv.threshold(src, dst, threshold, 255, cv.THRESH_BINARY);
  cv.imshow('imageCanvas', dst);
  src.delete();
  dst.delete();
};