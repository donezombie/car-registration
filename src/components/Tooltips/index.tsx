import React from 'react';
import { Spinner } from 'reactstrap';

const Tooltips = (props: any) => {
  const { messageToolTip, isOpen, style, placementTooltip } = props;

  if (isOpen) {
    return (
      <div style={style} className={`tooltip-customize fadeIn ${placementTooltip}`}>
        <div className="loading">
          <Spinner color="primary" />
        </div>
        <div className="content">{messageToolTip}</div>
      </div>
    );
  }

  return null;
};

export default React.memo(Tooltips);

Tooltips.defaultProps = {
  target: '',
  placement: 'auto',
  isOpen: false,
  toggle: () => {},
  messageToolTip: '',
};
