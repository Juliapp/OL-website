import React, { useCallback, useState } from 'react';
import { information } from '@assets';
import { AboutPanel, LoggiBanner, SquaredButton } from '@atoms';
import './styles.css';
const WebAsideContainer: React.FC = ({ children }) => {
  const [popupAbout, setpopupAbout] = useState(false);

  const togglePopUp = useCallback(() => {
    setpopupAbout((popupAbout) => !popupAbout);
  }, []);

  const closePopUp = useCallback(() => {
    setpopupAbout(false);
  }, []);

  return (
    <div>
      <div className="web-header-container">
        <SquaredButton
          squaredIcon={information}
          onClick={togglePopUp}
          styles={popupAbout ? { backgroundColor: '#ECECEC' } : {}}
        />
        <div className="panel-container">
          <div className="banner default-shadow">
            <LoggiBanner />
          </div>
          {children}
        </div>
      </div>
      {popupAbout && <AboutPanel onClick={closePopUp} />}
    </div>
  );
};

export default WebAsideContainer;
