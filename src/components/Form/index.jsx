import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Form = () => {
  const [inputs, setInputs] = useState(['', '', '', '']);

  const cardInputRef = useRef([0, 1, 2, 3].map(() => useRef(false)));

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs]
    newInputs[index] = value
    setInputs(newInputs)
    
    if (value.length>=4 && index<3){
      cardInputRef.current[index + 1].current.focus()
    }
  };

  useEffect(()=> {
    cardInputRef.current[0].current.focus()    
  },[])
  
  return (
    <div >
      {inputs.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          maxLength="4"          
          ref={cardInputRef.current[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
          />
      ))}
    </div>
  )
}

export default Form