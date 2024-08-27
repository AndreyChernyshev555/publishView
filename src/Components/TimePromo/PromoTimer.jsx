import React, { useState, useEffect } from "react";

let today = new Date();
const finish = new Date(2025, 1, 1);

function addZero(number) {
  if (number < 10) return "0" + number;
  else return number;
}

export default function PromoTimer() {
  const [data, setData] = useState(finish - today);
  useEffect(() => {
    const interval = setInterval(() => {
      setData(finish - new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [data]);
  return (
    <div className="time-promotion_timer-block">
      Offer expires in:
      <div className="time-promotion_timer">
        <div className="time-promotion_number">
          {addZero(data > 0 ? Math.floor(data / 1000 / 60 / 60 / 24) : 0)}
        </div>
        <div className="time-promotion_number">
          {addZero(data > 0 ? Math.floor(data / 1000 / 60 / 60) % 24 : 0)}
        </div>
        <div className="time-promotion_number">
          {addZero(data > 0 ? Math.floor(data / 1000 / 60) % 60 : 0)}
        </div>
        <div className="time-promotion_number">
          {addZero(data > 0 ? Math.floor(data / 1000) % 60 : 0)}
        </div>
        <div className="time-promotion_number-text">Days</div>
        <div className="time-promotion_number-text">Hours</div>
        <div className="time-promotion_number-text">Minutes</div>
        <div className="time-promotion_number-text">Seconds</div>
      </div>
    </div>
  );
}
