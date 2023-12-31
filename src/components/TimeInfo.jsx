import React, { useState, useEffect } from "react";

function TimeInfo() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();

      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Note: Months are zero-based, so we add 1
      const day = currentDate.getDate();
      const hour = currentDate.getHours();
      const minute = currentDate.getMinutes();
      const second = currentDate.getSeconds();

      const formattedTime = `${hour}:${
        minute < 10 ? "0" + minute : minute
      }:${second}`;
      const formattedDate = `${day}/${month}/${year}`;

      setTime(formattedTime);
      setDate(formattedDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="info2">
      <h5 id="time" className="time">
        {time}
      </h5>
      <h5 id="date" className="date">
        {date}
      </h5>
    </div>
  );
}

export default TimeInfo;
