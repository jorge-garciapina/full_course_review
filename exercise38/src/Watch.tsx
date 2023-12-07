import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const Watch: React.FC = () => {
  const [is24Hour, setIs24Hour] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = is24Hour ? date.getHours() : date.getHours() % 12 || 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = is24Hour ? "" : date.getHours() >= 12 ? "PM" : "AM";
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  };

  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fade}>
      <div
        style={{ fontSize: "24px", fontFamily: "Arial", textAlign: "center" }}
      >
        {formatTime(time)}
      </div>
      <FormControlLabel
        control={
          <Switch checked={is24Hour} onChange={() => setIs24Hour(!is24Hour)} />
        }
        label="24 Hour Format"
      />
    </animated.div>
  );
};

export default Watch;
