import React, { useEffect } from 'react';
import useStore from '../../services/store';
import KeyPress from '../keyPress/KeyPress';

const ScreenGame: React.FC<{
  context: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
}> = ({ context, canvas }) => {
  const startGame = useStore((state) => state.startGame);

  useEffect(() => {
    if (context != null && canvas != null) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'green';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'white';
      context.font = '30px Arial';
      context.fillText('Game Screen', 50, 50);
      startGame();
    }
  }, []);

  return (
    <>
      <KeyPress />
    </>
  );
};

export default ScreenGame;
