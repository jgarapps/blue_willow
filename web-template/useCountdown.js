import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate);
  const [countDown, setCountDown] = useState(countDownDate);

  const getReturnValues = (countDown) => {
    const days = Math.floor((countDown / (1000 * 60 * 60 * 24)) % 1);
    const seconds = Math.floor((countDown / 1000) % 60);
    const minutes = Math.floor((countDown / 1000 / 60) % 60);
    const hours = Math.floor((countDown / 1000 / 60 / 60) % 24);
    return [days, hours, minutes, seconds];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(new Date() - countDownDate);
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(countDown);
};

export { useCountdown };
