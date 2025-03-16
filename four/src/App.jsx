import { useEffect, useState } from 'react';
import './App.css'

function useDebounce(val, time){
  //return val;
  const [d, setD] = useState(val)
  useEffect(()=>{
    let timeout = setTimeout(()=>{
      setD(val)
    }, time)

    return ()=>{
      clearInterval(timeout)
    }
  }, [val])
  return d
}

const SearchBar = ()=>{
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue, 500);
  return (
    <>
      <div>
        Debounced value is {debounceValue}
      </div>
      <input
        type="text"
        value = {inputValue}
        onChange={(e)=>{
          setInputValue(e.target.value)
        }}
        placeholder='Search'
      />
    </>
  )
}
function App() {
  
  return (
    <>
     <SearchBar/>
    </>
  )
}


export default App
