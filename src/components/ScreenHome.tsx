import React, { useEffect } from 'react';
import { type StoreState } from '../services/interfaces';

const ScreenHome: React.FC<{
  context: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
  setCurrentScreen: StoreState['setCurrentScreen'];
}> = ({ context, canvas, setCurrentScreen }) => {
  useEffect(() => {
    if (context != null && canvas != null) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'skyblue';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'white';
      context.font = '30px Arial';
      context.fillText('Home Screen', 50, 50);
    }
  }, [context, canvas]);

  return (
    <div>
      <button
        onClick={() => {
          setCurrentScreen('howToPlay'); // 게임 방법 페이지로 이동
        }}
      >
        게임 방법
      </button>
      <button
        onClick={() => {
          setCurrentScreen('ranking'); // 랭킹 페이지로 이동
        }}
      >
        랭킹
      </button>
      <button
        onClick={() => {
          setCurrentScreen('creators'); // 제작자들 페이지로 이동
        }}
      >
        제작자들
      </button>
    </div>
  );
};

export default ScreenHome;
