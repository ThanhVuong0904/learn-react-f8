import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'

export default function Content() {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])
  const handleReviewAvatar = (e) => {
    const file = e.target.files[0]
    console.log(file);
    //URL là 1 object
    //object là có phương thức
    //createObjectURL là 1 phương thức
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }
  return (
    <div>
      <input type="file" onChange={handleReviewAvatar}/>
      {avatar && <img src={avatar.preview} style={{width: 100}} alt={avatar}/>}
    </div>
  )
}
