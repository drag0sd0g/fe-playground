import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  //lifecycle methods substitute - will run after render
  //Since it changes state on every run, it will trigger re-render endlessly
  useEffect(() => tick(), [date]);

  return <div>Hey there. It's {date.toLocaleTimeString()}</div>;
}

export default Clock;
