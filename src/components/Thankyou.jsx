import React, { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Thankyou() {
  const navigate = useNavigate()
  const playagain = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className='thankyou'>
      <h4>Your time is over!!</h4>
      <h2>Thanks for participating in the quiz</h2>
      <div>
      <textarea name="feedback" id="feedback" placeholder='Enter your feedback'></textarea></div>
      <button onClick={playagain}>Play again</button>
    </div>
  )
}
