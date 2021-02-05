import React from 'react';
import { convertOneToTwoString, generatorDot } from 'helpers';

interface EachFieldDateI {
  dot: number;
  label: string;
  style?: object;
  value: Date;
}

const EachFieldDate: React.FC<EachFieldDateI> = ({ dot, label, style, value }) => {
  const d = new Date(value);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  //! Render
  return (
    <div className="each-field date" style={style}>
      <span>{label}:</span>
      <span className="dot">
        <span className="value">{convertOneToTwoString(day)}</span>
        {generatorDot(dot)}
      </span>
      <span className="slash">/</span>
      <span className="dot">
        <span className="value">{convertOneToTwoString(month)}</span>
        {generatorDot(dot)}
      </span>
      <span className="slash">/</span>
      <span className="dot">
        <span className="value">{convertOneToTwoString(year)}</span>
        {generatorDot(dot)}
      </span>
    </div>
  );
};

export default EachFieldDate;
