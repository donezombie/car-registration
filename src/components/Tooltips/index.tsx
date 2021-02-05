import React from 'react';
import { Tooltip, TooltipProps } from 'reactstrap';

const Tooltips: React.FC<TooltipProps> = (props) => {
  const { target, messageToolTip, isOpen, style, toggle, placement } = props;

  return (
    <Tooltip style={style} placement={placement} isOpen={isOpen} target={target} toggle={toggle}>
      {messageToolTip}
    </Tooltip>
  );
};

export default React.memo(Tooltips);

Tooltips.defaultProps = {
  target: '',
  placement: 'auto',
  isOpen: false,
  toggle: () => {},
  messageTooltip: '',
};
