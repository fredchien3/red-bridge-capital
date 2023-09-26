import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Hong_Kong" }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <p>
      {date}
    </p>
  )
}