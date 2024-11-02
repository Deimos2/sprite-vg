import { Pane } from 'tweakpane';
import { SVG } from '@svgdotjs/svg.js';

declare const cv: any;


const setupTweakpane = () => {
  const container = document.getElementById('tweakpane');
  if (!container) {
    console.error('Tweakpane container not found');
    return;
  }

  // Initialize the pane instance
  const pane = new Pane({ container });

  // Test adding an input control to verify functionality
  const params = { threshold: 100 };
  try {
    pane.addBinding(params, 'threshold', { min: 0, max: 255 });
    pane.on('change', () => {
      console.log('Threshold changed:', params.threshold);
    });
  } catch (error) {
    console.error('Error adding input to Tweakpane:', error);
  }
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