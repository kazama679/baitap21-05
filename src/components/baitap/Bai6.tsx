import React, { useState } from 'react'

export default function Bai6() {
  const [number,setNumber]=useState<number>(0);
  return (
    <div>
      <button onClick={()=>setNumber(number+1)}>tăng</button>
      <p>{number}</p>
    </div>
  )
}
