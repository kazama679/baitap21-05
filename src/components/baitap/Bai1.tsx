import React, { useState } from 'react'

export default function Bai1() {
  const [name,setName]=useState<string>('Quang');
  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  )
}
