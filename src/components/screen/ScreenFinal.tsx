import type React from 'react';
import { useEffect } from 'react';

const ScreenFinal: React.FC<{
  context: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
}> = ({ context, canvas }) => {
  useEffect(() => {
    if (context != null && canvas != null) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'lightgray';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'black';
      context.font = '30px Arial';
      context.fillText('Final Screen', 50, 50);
    }
  }, [context, canvas]);

  return null;
};

export default ScreenFinal;
