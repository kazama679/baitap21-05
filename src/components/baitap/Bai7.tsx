import React, { useState } from 'react'

export default function Bai7() {
    const [feedback,setFeedback]=useState<string>('');
    const handleChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setFeedback(e.target.value)
    }
  return (
    <div>
      <textarea onChange={handleChange} name="" id="">
      </textarea>
      <p>Số kí tự: {feedback.length}</p>
    </div>
  )
}
