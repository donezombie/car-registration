import React from 'react';
import { generatorDot } from 'helpers';

interface EachFieldWithDotI {
  dot: number;
  label: string;
  style?: object;
  value?: string;
  notTwoDots?: boolean;
  longString?: boolean;
}

const EachFieldWithDot: React.FC<EachFieldWithDotI> = ({ dot, label, style, value, notTwoDots, longString }) => {
  //! Render
  if (longString) {
    return (
      <div className="each-field long" style={style}>
        <span style={{ float: 'left' }}>
          {label}
          {!notTwoDots && ':'}
        </span>
        <span className="dot">{value}</span>
      </div>
    );
  }

  return (
    <div className={`each-field`} style={style}>
      <span dangerouslySetInnerHTML={{ __html: label }} /> {!notTwoDots && ':'}
      <span className="dot">
        <span className="value">{value}</span>
        {generatorDot(dot)}
      </span>
    </div>
  );
};

export default EachFieldWithDot;
