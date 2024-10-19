// App.tsx
import React from 'react';
import useStore from './services/store';
import Canvas from './components/Canvas';

const App: React.FC = () => {
  const { currentScreen, setCurrentScreen } = useStore();

  return (
    <div>
      <Canvas currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <div>
        <button
          onClick={() => {
            setCurrentScreen('home');
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setCurrentScreen('howToPlay');
          }}
        >
          How to Play
        </button>
        <button
          onClick={() => {
            setCurrentScreen('preparation');
          }}
        >
          Preparation
        </button>
        <button
          onClick={() => {
            setCurrentScreen('characterSelect');
          }}
        >
          Character Select
        </button>
        <button
          onClick={() => {
            setCurrentScreen('mapSelect');
          }}
        >
          Map Select
        </button>
        <button
          onClick={() => {
            setCurrentScreen('game');
          }}
        >
          Game
        </button>
        <button
          onClick={() => {
            setCurrentScreen('final');
          }}
        >
          Final
        </button>
        <button
          onClick={() => {
            setCurrentScreen('ranking');
          }}
        >
          Ranking
        </button>
        <button
          onClick={() => {
            setCurrentScreen('creators');
          }}
        >
          Creators
        </button>
      </div>
    </div>
  );
};

export default App;
