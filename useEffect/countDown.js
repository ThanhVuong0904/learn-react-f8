import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'

export default function Content() {
  const [countDown, setCountDown] = useState(180)
  // setInterval (chạy vô hạn)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown(prevState => prevState - 1)
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  //setTimeOut
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCountDown(countDown - 1)
    }, 1000)

    return () => clearTimeout(timerId)
  }, [countDown])
  return (
    <div>
      <h1>{countDown}</h1>
    </div>
  )
}
