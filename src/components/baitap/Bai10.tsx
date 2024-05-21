import React, { useState } from 'react'

export default function Bai10() {
  const options = ['Đi bơi', 'Code', 'Bơi lội', 'Nhảy dây'];
  const [option, setOption] = useState<string[]>([]);
  const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOption((a) => {
      if (a.includes(value)) {
        return a.filter((option) => option !== value);
      } else {
        return [...a, value];
      }
    });
  };
  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option}
            checked={option.includes(option)}
            onChange={handle}
          />
          {option}
        </label>
      ))}
      <p>Sở thích: [{option.map((b) => (
          b+', '
        ))}]</p>
    </div>
  )
}
