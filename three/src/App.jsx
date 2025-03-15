import { useEffect, useState } from 'react'
import './App.css'

function useInterval(fn, timeout){
  useEffect(()=>{
    const interval = setInterval(()=>{
      fn()
    },timeout);
    return ()=>{
      clearInterval(interval)
    }
  },[fn, timeout])
}
function App() {
  const [count, setCount] = useState(0);
  
  useInterval(()=>{
    setCount(c=>c+1)
  },1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App
