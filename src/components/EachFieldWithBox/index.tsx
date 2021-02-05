import React from 'react';
import { generatorBox } from 'helpers';

interface EachFieldWithBoxI {
  numberBox: number;
  style?: object;
  styleBox?: object;
  values?: any[];
  label: string;
}

const EachFieldWithBox: React.FC<EachFieldWithBoxI> = ({ numberBox, label, style, styleBox, values = [] }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="each-field">
      <span dangerouslySetInnerHTML={{ __html: label }} />:
      <div className="box-container" style={style}>
        {generatorBox(numberBox).map((number) => {
          return (
            <div key={number} className="each-box" style={styleBox}>
              {values[number]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EachFieldWithBox;
