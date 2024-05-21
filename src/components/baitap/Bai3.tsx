import React, { useState } from 'react';

export default function Bai3() {
  const [name, setName] = useState<string>('Tiêu đề văn bản');
  const [color, setColor] = useState<string>('black'); 
  const setColorRed = () => {
    setColor('red');
  };
  return (
    <div>
      <h2 style={{ color: color }}>{name}</h2>
      <button onClick={setColorRed}>Change Color</button>
    </div>
  );
}