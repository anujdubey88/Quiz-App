import React, { useState } from 'react'
import { questionOption } from '../data'
import { useNavigate } from 'react-router-dom'

const useArray = (defaultArray) => {
  const [array, setArray] = useState(defaultArray)
  

  const update = (index, item) => {
    setArray(prevArray => {
      const newArray = [...prevArray]
      newArray[index] = item
      console.log(newArray)
      return newArray
    })
  }
  
  return [array, setArray, update]
}

export default function Question() {
    const [selectedAnswers, setSelectedAnswers, updateAnswer] = useArray(new Array(questionOption.length).fill(null))
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()

    return (
      <div className='que'>
        <div className='qanda'>
          <div className='question'>
            <h4>Question : {index + 1}</h4>
            <p>{questionOption[index].question}</p>
          </div>
          <div className="option">
            {questionOption[index].option.map((option, i) => (
              <div key={i}>
                <input 
                  type="radio" 
                  id={`option${i}`} 
                  onChange={() => updateAnswer(index, option)} 
                  name={`option${index}`} 
                  checked={selectedAnswers[index] === option}
                />
                <label htmlFor={`option${i}`}> {option} </label> 
              </div>
            ))}
          </div>
          <div className='btn'>
            <button disabled={index === 0} onClick={() => setIndex(index - 1)}>Previous</button>
            <button disabled={index === questionOption.length - 1} onClick={() => setIndex(index + 1)}>Next</button>
            <button onClick={() => navigate('/thankyou')}>Submit</button>
          </div>
        </div>
        <div className='img'>
          <img src={process.env.PUBLIC_URL +'/images/SharpCode.png'} alt="NO Image" />
        </div>
      </div>
    )
}
