import { Pane } from 'tweakpane';
import { SVG } from '@svgdotjs/svg.js';

// Initialize OpenCV.js
const initializeOpenCV = () => {
  cv['onRuntimeInitialized'] = () => {
    console.log("OpenCV.js is ready!");
  };
};

// Set up Tweakpane for controlling parameters
const setupTweakpane = () => {
  const pane = new Pane({ container: document.getElementById('tweakpane') });
  
  // Define parameters for filters
  const params = { threshold: 100 };
  pane.addInput(params, 'threshold', { min: 0, max: 255 });

  // Add event listeners for parameters
  pane.on('change', (value) => {
    applyFilter(params.threshold);
  });
};

// Example function to apply a filter
const applyFilter = (threshold) => {
  // Example: Apply OpenCV threshold filter
  let src = cv.imread('imageCanvas');
  let dst = new cv.Mat();
  cv.threshold(src, dst, threshold, 255, cv.THRESH_BINARY);
  cv.imshow('imageCanvas', dst);
  src.delete(); dst.delete();
};

// Initialize SVG.js
const setupSVG = () => {
  const draw = SVG().addTo('#svgContainer').size(400, 400);
  draw.circle(100).fill('blue').move(100, 100);
};

// Main function to initialize the app
const main = () => {
  initializeOpenCV();
  setupTweakpane();
  setupSVG();
};

main();