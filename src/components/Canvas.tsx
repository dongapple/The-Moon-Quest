// Canvas.tsx
import React, { useRef, useEffect, useState } from 'react';
import ScreenHome from './ScreenHome';
import ScreenHowToPlay from './ScreenHowToPlay';
import ScreenPreparation from './ScreenPreparation';
import ScreenCharacterSelect from './ScreenCharacterSelect';
import ScreenMapSelect from './ScreenMapSelect';
import ScreenGame from './ScreenGame';
import ScreenFinal from './ScreenFinal';
import ScreenRanking from './ScreenRanking';
import ScreenCreators from './ScreenCreators';
import { type StoreState } from '../services/interfaces';

interface CanvasProps {
  currentScreen: StoreState['currentScreen'];
  setCurrentScreen: StoreState['setCurrentScreen'];
}

const Canvas: React.FC<CanvasProps> = ({ currentScreen, setCurrentScreen }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  // useEffect로 context를 안전하게 설정
  useEffect(() => {
    if (canvasRef.current != null) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx != null) {
        setContext(ctx);
      }
    }
  }, []);

  // 화면이 변경될 때마다 캔버스를 초기화
  useEffect(() => {
    if (context != null && canvasRef.current != null) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [context, currentScreen]);

  return (
    <>
      <canvas ref={canvasRef} width={1280} height={720} />
      {currentScreen === 'home' && (
        <ScreenHome
          context={context}
          canvas={canvasRef.current}
          setCurrentScreen={setCurrentScreen}
        />
      )}
      {currentScreen === 'howToPlay' && (
        <ScreenHowToPlay context={context} canvas={canvasRef.current} />
      )}
      {currentScreen === 'preparation' && (
        <ScreenPreparation
          context={context}
          canvas={canvasRef.current}
          setCurrentScreen={setCurrentScreen}
        />
      )}
      {currentScreen === 'characterSelect' && (
        <ScreenCharacterSelect context={context} canvas={canvasRef.current} />
      )}
      {currentScreen === 'mapSelect' && (
        <ScreenMapSelect context={context} canvas={canvasRef.current} />
      )}
      {currentScreen === 'game' && <ScreenGame context={context} canvas={canvasRef.current} />}
      {currentScreen === 'final' && <ScreenFinal context={context} canvas={canvasRef.current} />}
      {currentScreen === 'ranking' && (
        <ScreenRanking context={context} canvas={canvasRef.current} />
      )}
      {currentScreen === 'creators' && (
        <ScreenCreators context={context} canvas={canvasRef.current} />
      )}
    </>
  );
};

export default Canvas;
