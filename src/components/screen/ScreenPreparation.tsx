import React, { useEffect } from 'react';
import { type StoreState } from '../../services/interfaces';

const ScreenPreparation: React.FC<{
  context: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
  setCurrentScreen: StoreState['setCurrentScreen'];
}> = ({ context, canvas, setCurrentScreen }) => {
  useEffect(() => {
    if (context != null && canvas != null) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'lightgreen';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'white';
      context.font = '30px Arial';
      context.fillText('Preparation Screen', 50, 50);
    }
  }, [context, canvas]);

  return (
    <div>
      <button
        onClick={() => {
          setCurrentScreen('characterSelect'); // 게임 방법 페이지로 이동
        }}
      >
        캐릭터 선택
      </button>
      <button
        onClick={() => {
          setCurrentScreen('mapSelect'); // 랭킹 페이지로 이동
        }}
      >
        맵선택
      </button>
      <button
        onClick={() => {
          setCurrentScreen('game'); // 제작자들 페이지로 이동
        }}
      >
        게임시작
      </button>
    </div>
  );
};

export default ScreenPreparation;
