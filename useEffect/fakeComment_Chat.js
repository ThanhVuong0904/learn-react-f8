import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'

//file index.js
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson${id}`
      })
    )
  }, 2000)
}
emitComment(1)
emitComment(2)
emitComment(3)
//
const lessons = [
  {id: 1, name: "ReacJS là gì? Tại sao nên học ReacJS?"},
  {id: 2, name: "SPA/MPA là gì"},
  {id: 3, name: "Arrow function"}
]
export default function Content() {
  const [lessonID, setLessonID] = useState(1)
  useEffect(() => {

    const handleComment = (event) => {
      //event ở đây là cái object new CustomEvent
      console.log(event.detail);
    }
    window.addEventListener(`lesson-${lessonID}`, handleComment)

    return () => {
      window.removeEventListener(`lesson-${lessonID}`, handleComment)
    }
  }, [lessonID])
  
  return (
    <div>
      {
        lessons.map(item => (
          <li 
            key={item.id}
            style={lessonID === item.id ? {color: 'red'} : {color: '#333'}}
            onClick={() => setLessonID(item.id)}
          >
            {item.name}
          </li>
        ))
      }
    </div>
  )
}
