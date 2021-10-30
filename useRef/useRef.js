import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Content from "./Content";
function App() {
    //Lưu các giá trị qua một tham chiếu mới bên ngoài func component
    const [count, setCount] = useState(60)

    const timerID = useRef()
    //timerID lúc đầu là undefine
    //Bấm Start thì nó sẽ gán setInterval vào timerID
    //Và set lại state Count
    //set lại state thì component render lại
    //render lại thì nó set lại timerID là undefine
    //Cho nên handleStop ko tác dụng 
    
    const prevCount = useRef()
    const h1Ref = useRef()
    useEffect(() => {
        prevCount.current = count
    }, [count])
    
    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect);
    })
    
    const handleStart = () => {
    timerID.current = setInterval(() => {
        setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerID.current)
    }
    console.log(count, prevCount.current);
    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default App;
