import React, { useRef, useEffect } from 'react';
import ScreenHome from './ScreenHome';
import ScreenHowToPlay from './ScreenHowToPlay';
import ScreenPreparation from './ScreenPreparation';
import ScreenCharacterSelect from './ScreenCharacterSelect';
import ScreenMapSelect from './ScreenMapSelect';
import ScreenGame from './ScreenGame';
import ScreenFinal from './ScreenFinal';
import ScreenRanking from './ScreenRanking';
import ScreenCreators from './ScreenCreators';

interface CanvasProps {
  currentScreen:
    | 'home'
    | 'howToPlay'
    | 'preparation'
    | 'characterSelect'
    | 'mapSelect'
    | 'game'
    | 'final'
    | 'ranking'
    | 'creators';
  setCurrentScreen: React.Dispatch<
    React.SetStateAction<
      | 'home'
      | 'howToPlay'
      | 'preparation'
      | 'characterSelect'
      | 'mapSelect'
      | 'game'
      | 'final'
      | 'ranking'
      | 'creators'
    >
  >;
}

const Canvas: React.FC<CanvasProps> = ({ currentScreen, setCurrentScreen }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = canvasRef.current != null ? canvasRef.current.getContext('2d') : null;

  useEffect(() => {
    if (context != null && canvasRef.current != null) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [context]);

  return (
    <>
      <canvas ref={canvasRef} width={1280} height={720} />
      {currentScreen === 'home' && <ScreenHome context={context} canvas={canvasRef.current} />}
      {currentScreen === 'howToPlay' && (
        <ScreenHowToPlay context={context} canvas={canvasRef.current} />
      )}
      {currentScreen === 'preparation' && (
        <ScreenPreparation context={context} canvas={canvasRef.current} />
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
