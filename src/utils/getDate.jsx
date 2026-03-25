// components/getDate.jsx
"use client";

import { useState, useEffect } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setYear(now.getFullYear());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>{time} ©{year}</p>;
}