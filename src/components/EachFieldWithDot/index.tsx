import React from 'react';

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
        <span className="label">
          {label}
          {!notTwoDots && ':'}
        </span>
        <span className="dot" style={{ width: dot }}>
          {value}
        </span>
      </div>
    );
  }

  return (
    <div className={`each-field`} style={style}>
      <span dangerouslySetInnerHTML={{ __html: label }} /> {!notTwoDots && ':'}
      <span className="dot" style={{ width: dot }}>
        <span className="value">{value}</span>
      </span>
    </div>
  );
};

export default EachFieldWithDot;
