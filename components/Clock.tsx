"use client";

import { ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format like: 10:42 PM, Dhaka
      const formattedTime = now.toLocaleTimeString("en-BD", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formattedTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
      <ClockIcon className="size-4 text-primary" />
      <span>{time}</span>
      <span className="text-xs text-primary/80 font-semibold flex items-center gap-1">
        BST <span className="text-base">🇧🇩</span>
      </span>
    </div>
  );
};

export default Clock;
