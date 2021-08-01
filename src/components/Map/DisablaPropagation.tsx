import { DomEvent } from 'leaflet';
import { useEffect, useRef } from 'react';

const DisablePropagation: React.FC = ({ children }) => {
  const divRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (divRef && divRef.current) {
      DomEvent.disableClickPropagation(divRef.current);
      DomEvent.disableScrollPropagation(divRef.current);
    }
  }, [divRef]);

  return (
    <div className="forward" ref={divRef}>
      {children}
    </div>
  );
};

export default DisablePropagation;
