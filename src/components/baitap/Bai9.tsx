import React, { useState } from 'react';

export default function Bai9() {
  const [gender, setGender] = useState<string>('Nam');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  return (
    <div>
      <p>Giới tính: {gender}</p>
      <label>
        <input
          type="radio"
          value="Nam"
          checked={gender === 'Nam'}
          onChange={handleChange}
        />
        Nam
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Nữ"
          checked={gender === 'Nữ'}
          onChange={handleChange}
        />
        Nữ
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Khác"
          checked={gender === 'Khác'}
          onChange={handleChange}
        />
        Khác
      </label>
    </div>
  );
}