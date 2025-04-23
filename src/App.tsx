import { useEffect, useState } from 'react'
import './App.css'

interface DynamicObject {
  [key: string]: any;
}

function App() {

  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(true)
  const [cache, setCache] = useState<DynamicObject>({});

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input])
      console.log('Cashed Data');
      return
    }

    const resultData = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
    const responseJson = await resultData.json()
    setCache((prev: any) => ({ ...prev, [input]: responseJson.recipes }))
    console.log('New API call');
    setResults(responseJson.recipes)

  }
  useEffect(() => {
    const timer = setTimeout(fetchData, 500);

    return () => {
      clearTimeout(timer)
    }

  }, [input])


  return (
    <>
      <h1>AutoComplete search bar</h1>
      <div className='container'>
        <div className='input-container'>
          <input
            type="text"
            value={input}
            onChange={((e) => setInput(e.target.value))}
            onFocus={(() => setShowResults(true))}
            onBlur={(() => setShowResults(false))} />
        </div>
        {showResults && <div className='result-container'>
          {results.map((item: any) => <span key={item?.id} className='result'>{item?.name}</span>)}
        </div>}
      </div>
    </>
  )
}

export default App
