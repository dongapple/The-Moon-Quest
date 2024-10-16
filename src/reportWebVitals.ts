import type { ReportHandler } from 'web-vitals'; // 'import type' 사용

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  // onPerfEntry가 null이 아닌지 확인합니다.
  if (onPerfEntry != null && typeof onPerfEntry === 'function') {
    // Promise를 await하거나 catch 블록을 추가합니다.
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((error) => {
        console.error('Error importing web-vitals:', error); // 오류를 로그로 출력
      });
  }
};

export default reportWebVitals;
