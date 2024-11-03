let originalImageData: ImageData | null = null;

export const setupImageUpload = () => {
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  const canvas = document.getElementById('imageCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  if (!fileInput || !ctx) {
    console.error('Image upload elements not found');
    return;
  }

  fileInput.addEventListener('change', (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height); // Store original image data
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};

export const getOriginalImageData = () => originalImageData;