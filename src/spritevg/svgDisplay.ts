import { SVG } from '@svgdotjs/svg.js';

export const setupSVGDisplay = () => {
  const draw = SVG().addTo('#svgContainer').size(400, 400);
  draw.circle(100).fill('blue').move(100, 100);
};