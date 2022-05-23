import React, { FC, useRef } from 'react'

const UseRefComponent: FC = ()  => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  return (
    <div>
      <input ref={inputRef} />
    </div>
  )
}

export default UseRefComponent