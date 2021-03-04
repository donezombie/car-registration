import React from 'react';

interface EachFieldWithDotI {
  dot: number;
  label: string;
  style?: object;
  value?: string;
  noColon?: boolean;
  longString?: boolean;
}

const EachFieldWithDot: React.FC<EachFieldWithDotI> = ({ dot, label, style, value, noColon, longString }) => {
  //! Render
  if (longString) {
    return (
      <div className="each-field long" style={style}>
        <span className="label">
          {label}
          {!noColon && ':'}
        </span>
        <span className="dot" style={{ width: dot }}>
          {value}
        </span>
      </div>
    );
  }

  return (
    <div className={`each-field`} style={style}>
      <span dangerouslySetInnerHTML={{ __html: label }} /> {!noColon && ':'}
      <span className="dot" style={{ width: dot }}>
        <span className="value">{value}</span>
      </span>
    </div>
  );
};

export default EachFieldWithDot;
