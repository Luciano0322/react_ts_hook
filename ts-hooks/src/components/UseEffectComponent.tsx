import { useState, useEffect } from 'react';

const UseEffectComponent = () => {
  const [val, setVal] = useState(1);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal(pre => pre + 1)
    }, 1000)
    // in react 18 一定要下return清掉func不然會有重複渲染的問題
    return () => window.clearInterval(timer)
  }, [])
  return (
    <div>
      {val}
    </div>
  );
}

export default UseEffectComponent;