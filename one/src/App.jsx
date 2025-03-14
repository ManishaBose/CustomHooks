import { useEffect, useState } from 'react';
import './App.css'

function useIsOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)
  useEffect(()=>{
    window.addEventListener("online",()=>{
      setIsOnline(true)
    })
    window.addEventListener("offline",()=>{
      setIsOnline(false)
    })
  },[])
  return isOnline
}

function App() {
  const isOnline = useIsOnline();
  return (
    <>
      {isOnline ? <div>You are online</div> : <div>you are offline</div>}
    </>
  )
}

export default App
