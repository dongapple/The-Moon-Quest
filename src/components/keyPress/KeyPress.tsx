import React from 'react';
import KeyboardButton from './KeyboardButton';
import MouseButton from './MouseButton';
import useStore from '../../services/store';

const KeyPress: React.FC = () => {
  const keyBindings = useStore((state) => state.keyBindings);

  return (
    <>
      <KeyboardButton keyName={keyBindings.jump} />
      <KeyboardButton keyName={keyBindings.moveLeft} />
      <KeyboardButton keyName={keyBindings.crouch} />
      <KeyboardButton keyName={keyBindings.moveRight} />
      <KeyboardButton keyName={keyBindings.gather} />
      <MouseButton buttonName="attack" keyNumber={keyBindings.attack} />
      <MouseButton buttonName="skill" keyNumber={keyBindings.skill} />
    </>
  );
};

export default KeyPress;
