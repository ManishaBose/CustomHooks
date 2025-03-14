import { useEffect, useState } from 'react';
import './App.css'

function useMousePointer(){
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(()=>{
    const handleMouseMove = (e)=>{
      setPosition({x: e.clientX, y: e.clientY})
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return ()=>{
      window.removeEventListener("mousemove", handleMouseMove)
    }
  },[])
  return position
}
function App() {
  const mousePointer = useMousePointer();
  return (
    <div>
      Your mouse pointer is {mousePointer.x} {mousePointer.y}
    </div>
  )
}

export default App
