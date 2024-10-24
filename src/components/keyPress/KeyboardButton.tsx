import React, { useState, useEffect } from 'react';

interface keyboardButtonProps {
  keyName: string;
}

const KeyboardButton: React.FC<keyboardButtonProps> = ({ keyName }) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === keyName) {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent): void => {
      if (event.key === keyName) {
        setIsPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keyName]);

  return (
    <button
      style={{
        backgroundColor: isPressed ? 'lightblue' : 'white',
        transform: isPressed ? 'scale(0.95)' : 'scale(1)',
        transition: 'transform 0.1s',
      }}
    >
      {keyName}
    </button>
  );
};

export default KeyboardButton;
