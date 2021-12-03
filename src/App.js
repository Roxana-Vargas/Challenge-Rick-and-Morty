import React, { useEffect, useState } from 'react';

import getExercise1Result from './Exercise1';

const Chipax = () => {

  const [exercise1Result, setExerciseResult1] = useState([]);

  const countCharacterInAllResources = async () => {
    setExerciseResult1(await getExercise1Result());
  }
  
  
  useEffect(() => {
    countCharacterInAllResources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ( 
    <div> 
      <pre style={{color: 'green'}}>{JSON.stringify(exercise1Result, null, 2)}</pre>
    </div> )
}

export default Chipax;
