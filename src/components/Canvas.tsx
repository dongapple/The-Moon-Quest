import React, { useRef, useEffect } from 'react';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let backgroundColor = 'skyblue'; // 기본 배경색

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    // 초기 그리기 함수
    const drawCanvas = (): void => {
      if (context != null && canvas != null) {
        context.fillStyle = backgroundColor; // 배경색 설정
        context.fillRect(0, 0, canvas.width ?? 0, canvas.height ?? 0); // 전체 배경 색칠

        context.fillStyle = 'white';
        context.font = '30px Arial';

        // 텍스트 그리기
        context.fillText('컨버스', 10, 50);
        context.fillText('2222', 10, 100); // 두 번째 텍스트
      }
    };

    // 처음에 캔버스를 그립니다
    drawCanvas();

    // 클릭 이벤트 핸들러
    const handleClick = (event: MouseEvent): void => {
      const rect = canvas?.getBoundingClientRect();
      const x = event.clientX - (rect?.left ?? 0);
      const y = event.clientY - (rect?.top ?? 0);

      // '2222' 텍스트의 위치 (좌표와 크기 확인)
      const textX = 10;
      const textY = 100;
      const textWidth = 60; // 텍스트의 예상 너비
      const textHeight = 30; // 텍스트의 예상 높이 (폰트 크기 기준)

      // 클릭한 좌표가 '2222' 텍스트 영역 안에 있는지 확인
      if (x >= textX && x <= textX + textWidth && y >= textY - textHeight && y <= textY) {
        // 배경색을 분홍색으로 변경
        backgroundColor = 'black';
        drawCanvas(); // 배경색 변경 후 다시 그리기
      }
    };

    // 캔버스에 클릭 이벤트 추가
    canvas?.addEventListener('click', handleClick);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      canvas?.removeEventListener('click', handleClick);
    };
  }, [backgroundColor]);

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={300} />
    </div>
  );
};

export default Canvas;
