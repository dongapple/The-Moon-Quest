import React from 'react';
import KeyboardButton from './KeyboardButton';
import MouseButton from './MouseButton';

const KeyPress: React.FC = () => {
  return (
    <>
      <KeyboardButton keyName="w" />
      <KeyboardButton keyName="a" />
      <KeyboardButton keyName="s" />
      <KeyboardButton keyName="d" />
      <KeyboardButton keyName=" " />
      <MouseButton buttonName="left" keyNumber={0} />
      <MouseButton buttonName="right" keyNumber={2} />
    </>
  );
};

export default KeyPress;
