import React, { useEffect, useRef } from 'react';

interface EachRowWithDotI {
  label: string;
  style?: object;
  value?: string;
  notTwoDots?: boolean;
  longString?: boolean;
  row: number;
}

const EachRowWithDot: React.FC<EachRowWithDotI> = ({ label, style, value, row }) => {
  const refLabel = useRef<any>();
  const refRows = useRef<any>();

  useEffect(() => {
    if (refLabel) {
      if (refRows.current) {
        for (let i = 1; i <= row; i++) {
          refRows.current.insertAdjacentHTML(
            'beforeend',
            `<span class="row-dot">
              <span class="value"></span>
            </span>`,
          );
        }
      }
    }
  }, []);

  //! Render
  return (
    <div className={`each-field`} style={{ ...style, width: '100%', position: 'relative', minHeight: 20 }}>
      <span ref={refLabel} className="label">
        {label}:
      </span>
      <div style={{ width: '100%' }} ref={refRows}></div>
    </div>
  );
};

export default EachRowWithDot;
