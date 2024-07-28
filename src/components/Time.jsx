import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Time() {
  const [time, setTime] = React.useState("00:05");
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setTimeout(() => {
      let [m, s] = time.split(":").map(Number);
      
      if (m === 0 && s === 0) {
        navigate('/thankyou');
      }
      else {
        if (s === 0) {
          m -= 1;
          s = 59;
        } else {
          s -= 1;
        }

        const formattedTime = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        setTime(formattedTime);
      }
    }, 1000);

    return () => clearTimeout(countdown); // Cleanup the timeout if the component unmounts
  }, [time, navigate]);

  return (
    <div className='time'>
      <h4>Time left: {time}</h4>
    </div>
  );
}
