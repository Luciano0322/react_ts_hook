import { useState } from 'react';

function UseStateComponent(){
  const [arr, arrSet] = useState<number[]>([])
  const [name, setName] = useState<string | null>(null)
  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length+1])}>
          add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => setName('Lee')}>
          set Name
        </button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}

export default UseStateComponent;