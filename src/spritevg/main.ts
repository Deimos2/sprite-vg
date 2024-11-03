import { setupImageUpload } from './imageUpload';
import { setupFilterControls } from './filterControls';
import { setupSVGDisplay } from './svgDisplay';
import { setupSVGEditControls } from './svgEditControls';

export const SpriteVG = () => {
  setupImageUpload();
  setupFilterControls();
  setupSVGDisplay();
  setupSVGEditControls();
};

(window as any).SpriteVG = SpriteVG;