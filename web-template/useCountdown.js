import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  debugger;
  const countDownDate = new Date(targetDate);
  const [countDown, setCountDown] = useState(countDownDate - new Date());

  const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / 86400);
    const hours = Math.floor((countDown / 3600) % 24);
    const minutes = Math.floor((countDown / 60) % 60);
    const seconds = Math.floor(countDown % 60);
    return [days, hours, minutes, seconds];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(countDown);
};

export { useCountdown };
