import React, { useEffect, useState } from 'react';

interface MouseButtonProps {
  buttonName: string; // buttonName
  keyNumber: number; // keyNumber
}

const MouseButton: React.FC<MouseButtonProps> = ({ buttonName, keyNumber }) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent): void => {
      if (event.button === keyNumber) {
        setIsPressed(true);
      }
    };

    const handleMouseUp = (event: MouseEvent): void => {
      if (event.button === keyNumber) {
        setIsPressed(false);
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [keyNumber]);

  return (
    <button
      onMouseDown={() => {
        setIsPressed(true);
      }}
      onMouseUp={() => {
        setIsPressed(false);
      }}
      style={{
        backgroundColor: isPressed ? 'lightblue' : 'white',
        transform: isPressed ? 'scale(0.95)' : 'scale(1)',
        transition: 'transform 0.1s',
      }}
    >
      {buttonName}
    </button>
  );
};

export default MouseButton;
