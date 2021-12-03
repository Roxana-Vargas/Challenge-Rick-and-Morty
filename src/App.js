import React, { useEffect, useState } from 'react';

import getExercise1Result from './ex1/exercise1';

import getExercise2Result from './ex2/exercise2';

const Chipax = () => {

  const [finalResult, setFinalResult] = useState([]);

  const calcResult = async () => {
    const result1 = await getExercise1Result();
    const result2 = await getExercise2Result();
    
    setFinalResult([
      result1, result2
    ])
  }
  
  useEffect(() => {
    calcResult()  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ( 
    <div> 
      <pre style={{color: 'green'}}>{JSON.stringify(finalResult, null, 2)}</pre>
    </div> )
}

export default Chipax;
