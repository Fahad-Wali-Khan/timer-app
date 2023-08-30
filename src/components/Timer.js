import React, { useState, useEffect } from 'react';

function Timer() {
  const initialWorkTime = 25 * 60;
  const initialBreakTime = 5 * 60;

  const [totalTime, setTotalTime] = useState(initialWorkTime);
  const [minutes, setMinutes] = useState(Math.floor(initialWorkTime / 60));
  const [seconds, setSeconds] = useState(initialWorkTime % 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && totalTime > 0) {
      interval = setInterval(() => {
        setTotalTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (totalTime === 0) {
      clearInterval(interval);
      if (totalTime === 0) {
        // Switch to break timer
        setTotalTime(initialBreakTime);
        setIsActive(true);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, totalTime, initialBreakTime]);

  useEffect(() => {
    setMinutes(Math.floor(totalTime / 60));
    setSeconds(totalTime % 60);
  }, [totalTime]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const restartTimer = () => {
    setTotalTime(initialWorkTime);
    setIsActive(false);
  };

  const formatTime = (timeValue) => {
    return timeValue < 10 ? `0${timeValue}` : timeValue;
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='space-y-6'>
      <div className='text-center text-9xl'>
        <span>{formatTime(minutes)}</span>:
        <span >{formatTime(seconds)}</span>
      </div>
      <div className='space-x-4' >
        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 h-14 w-28 hover:green-blue-500 rounded" onClick={startTimer} disabled={isActive}>
          Start
        </button>
        
        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 h-14 w-28 hover:border-red-500 rounded" onClick={pauseTimer} disabled={!isActive}>
          Pause
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 h-14 w-28 hover:border-blue-500 rounded" onClick={restartTimer}>Restart</button>
      </div>
      </div>
    </div>
  );
}

export default Timer;
