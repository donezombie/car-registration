import React from 'react';
import { generatorDot } from 'helpers';

interface EachFieldWithDotI {
  dot: number;
  label: string;
  style?: object;
  value?: string;
}

const EachFieldWithDot: React.FC<EachFieldWithDotI> = ({ dot, label, style, value }) => {
  //! Render
  return (
    <div className="each-field" style={style}>
      <span dangerouslySetInnerHTML={{ __html: label }} />:
      <span className="dot">
        <span className="value">{value}</span>
        {generatorDot(dot)}
      </span>
    </div>
  );
};

export default EachFieldWithDot;
