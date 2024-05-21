import React, { useState } from 'react'

export default function Bai5() {
  const [input,setInput]=useState<string>('');
  const change=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
  }
  return (
    <div>
      <input onChange={change}></input>
      <p>{input}</p>
    </div>
  )
}