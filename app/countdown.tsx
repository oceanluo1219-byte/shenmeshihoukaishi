"use client";

import { useState, useEffect } from "react";

export function Countdown() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const calc = () => {
      const opening = new Date("2026-06-11T15:00:00-04:00").getTime();
      const now = Date.now();
      const diff = Math.ceil((opening - now) / (1000 * 60 * 60 * 24));
      setDays(diff > 0 ? diff : 0);
    };
    calc();
    const timer = setInterval(calc, 60000);
    return () => clearInterval(timer);
  }, []);

  if (days === null) return null;

  return (
    <div className="countdown">
      <span className="countdown-number">{days}</span>
      <span className="countdown-label">天后开幕</span>
    </div>
  );
}
