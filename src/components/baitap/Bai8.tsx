import React, { useState } from 'react'

export default function Bai8() {
  const [address,setAddress]=useState<string>('');
  const changeAddress=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    setAddress(e.target.value)
  }
  return (
    <div>
      <select onChange={changeAddress} name="" id="">
        <option value="">-- Chọn thành phố --</option>
        <option value="HN">HN</option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="HCM">HCM</option>
      </select>
      <p>lựa chọn là: {address}</p>
    </div>
  )
}