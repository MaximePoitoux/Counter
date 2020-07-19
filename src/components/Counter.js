import React, { useState } from 'react';

function Counter() {

  const [Count, setCount] = useState(0)

  return (
    <div>
      <input type='number' value={Count}></input>
      <button  onClick={() =>  setCount(Count + 1)}>
        +1
      </button>
      <button  onClick={() =>  setCount(Count - 1)}>
        -1
      </button>
    </div>
  )
}

export default Counter;