import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
//Call API
//Tabs
//Go to top
export default function Content() {
  const tabs = ['posts', 'albums', 'todos']
  const [data, setData] = useState([])
  const [tab, setTab] = useState("posts")

  const [showGoToTop, setGoToTop] = useState(false)
  //Call api
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${tab}`)
    .then(res => res.json())
    .then(data => setData(data))
  }, [tab])

  //Go to top
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 200) {
        setGoToTop(true)
      }
      else {
        setGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    //Clean up function luôn được gọi trước khi component bị unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      {
        tabs.map(item => 
          <button 
            key={item} 
            style={tab === item ? {color: 'red'} : {color: "blue"}}
            onClick={() => setTab(item)}
          >
              {item}
          </button>
        )
      }
      {
        data.map((item, index) => {
          return (
            <li key={index}>{item.title}</li>
          )
        })
      }
      {showGoToTop && 
        <button 
          style={{position: "fixed", bottom: 20, right: 20}}
          onClick={() => window.scrollTo(0, 0)}
        >
          Go To Top
        </button>
      }
    </div>
  )
}
