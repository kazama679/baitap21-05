import React, { useState } from 'react';

export default function Bai4() {
  const [name, setName] = useState<string>('');
  const [button, setButton] = useState<string>('Hiện');
  const change = () => {
    setName('Tiêu đề văn bản');
    setButton('Ẩn');
  };
  return (
    <div>
      <button onClick={change}>{button}</button>
      <h2>{name}</h2>
    </div>
  );
}