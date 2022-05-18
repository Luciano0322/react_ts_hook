import { useState } from 'react';

function UseStateComponent(){
  const [arr, arrSet] = useState<number[]>([])
  // 可以有額外的type 在<>之中用|隔開即可
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