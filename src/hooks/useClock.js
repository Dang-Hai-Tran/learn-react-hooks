import { useEffect, useState, useRef } from 'react';

const formatDate = (date) => {
  const hours = date.getHours();
  const mins = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${mins < 10 ? `0${mins}` : mins}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
const useClock = () => {
  const [timeString, setTimeString] = useState('');
  const timeInterval = useRef(null);
  useEffect(() => {
    timeInterval.current = setInterval(() => {
      const now = new Date();
      // hh:mins:second
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(timeInterval.current);
    };
  }, []);
  return { timeString };
};

export default useClock;
