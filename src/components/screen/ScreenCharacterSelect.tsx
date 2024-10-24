import React, { useEffect } from 'react';
import KeyPress from '../keyPress/KeyPress';

const ScreenCharacterSelect: React.FC<{
  context: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
}> = ({ context, canvas }) => {
  useEffect(() => {
    if (context != null && canvas != null) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'lightcoral';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'white';
      context.font = '30px Arial';
      context.fillText('Character Select', 50, 50);
    }
  }, [context, canvas]);

  return <KeyPress />;
};

export default ScreenCharacterSelect;
