import { Pane } from 'tweakpane';
import { SVG } from '@svgdotjs/svg.js';

declare const cv: any;

// Set up Tweakpane for controlling parameters
const setupTweakpane = () => {
  const pane = new Pane({ container: document.getElementById('tweakpane') as HTMLElement }) as any;
  
  const params = { threshold: 100 };
  pane.addInput(params, 'threshold', { min: 0, max: 255 });

  pane.on('change', (value: any) => {
    applyFilter(params.threshold);
  });
};

const applyFilter = (threshold: number) => {
  const src = cv.imread('imageCanvas');
  const dst = new cv.Mat();
  cv.threshold(src, dst, threshold, 255, cv.THRESH_BINARY);
  cv.imshow('imageCanvas', dst);
  src.delete(); dst.delete();
};

const setupSVG = () => {
  const draw = SVG().addTo('#svgContainer').size(400, 400);
  draw.circle(100).fill('blue').move(100, 100);
};

export const SpriteVG = () => {
  setupTweakpane();
  setupSVG();
};

(window as any).SpriteVG = SpriteVG;