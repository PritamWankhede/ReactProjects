import React, { useState } from 'react';
import Styles from './TimerInput.module.css';
import Button from '../Button/Button';

const TIME = {
  HOUR: 'HOUR',
  MIN: 'MIN',
  SEC: 'SEC',
};

const TimerInput = ({ setTimer }) => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const setInputHandler = (value, type) => {
    if (isNaN(value) || value < 0) return;
    let newValue = parseInt(value) || 0;
    if (type !== TIME.HOUR && newValue > 59) newValue = 59;

    switch (type) {
      case TIME.HOUR:
        setHour(newValue);
        break;
      case TIME.MIN:
        setMin(newValue);
        break;
      case TIME.SEC:
        setSec(newValue);
        break;
      default:
        console.log('Invalid type');
    }
  };

  const setTimeHandler = () => {
    const totalSeconds = hour * 3600 + min * 60 + sec;
    setTimer(totalSeconds);
  };

  return (
    <>
      <div className={Styles.inputhandler}>
        <input
          type="number"
          onChange={(e) => setInputHandler(e.target.value, TIME.HOUR)}
          value={hour}
          maxLength={2}
        />
        <input
          type="number"
          onChange={(e) => setInputHandler(e.target.value, TIME.MIN)}
          value={min}
          maxLength={2}
        />
        <input
          type="number"
          onChange={(e) => setInputHandler(e.target.value, TIME.SEC)}
          value={sec}
          maxLength={2}
        />
      </div>
      <div>
        <Button label="Set" btnHandler={setTimeHandler} />
      </div>
    </>
  );
};

export default TimerInput;