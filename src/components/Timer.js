import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState(0);

    // setInterval(callback, ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev+1)
        }, 1000);

        // cleanup function
        return () => {
            clearInterval(interval);
            console.log("timer stopped");
        }
    }, []);

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default Timer
