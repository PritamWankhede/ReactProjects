import React, { useEffect, useState } from 'react';
import Styles from './Timer.module.css';
import Button from '../Button/Button';
import TimerInput from '../TimerInput/TimerInput';

const Timer = () => {
   const [running, setRunning] = useState(false);
   const [time, setTimer] = useState(0);
   const [edit, setEdit] = useState(true);

   useEffect(() => {
     let interval;
     if (running) {
       interval = setInterval(() => {
         setTimer((prevTime) => {
           if (prevTime > 0) {
             return prevTime - 1;
           } else {
             clearInterval(interval);
             return 0;
           }
         });
       }, 1000);
     } else {
       clearInterval(interval);
     }
     return () => clearInterval(interval);
   }, [running, time]);

   const toggleEdit = () => {
     setRunning(false);
     setEdit(true);
   };

   const toggleState = () => {
     setRunning((prevState) => !prevState);
   };

   const resetHandler = () => {
     setRunning(false);
     setTimer(0);
   };

   const hour = Math.floor(time / 3600);
   const min = Math.floor((time % 3600) / 60);
   const sec = time % 60;

   const formatTime = (t) => (t > 9 ? t : `0${t}`);

   const handleSetTime = (newTime) => {
     setTimer(newTime);
     setEdit(false);
   };

   return (
     <div className={Styles.container}>
       {edit ? (
         <TimerInput setTimer={handleSetTime} />
       ) : (
         <>
           <div className={Styles.timer}>
             {formatTime(hour)} : {formatTime(min)} : {formatTime(sec)}
           </div>
           <div className={Styles.controls}>
             <Button label={running ? 'Stop' : 'Start'} btnHandler={toggleState} />
             <Button label="Edit" btnHandler={toggleEdit} />
             <Button label="Reset" btnHandler={resetHandler} />
           </div>
         </>
       )}
     </div>
   );
};

export default Timer;
