import { useEffect } from 'react';

export default (ref: any, handler: (arg: any) => void) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (ref) {
        if (ref.current.input) {
          if (!ref.current.input || ref.current.input.contains(event.target)) {
            return;
          }
        } else {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
        }

        handler && handler(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
