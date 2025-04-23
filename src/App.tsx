import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(true)

  const fetchData = async () => {
    const resultData = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
    const responseJson = await resultData.json()
    console.log(responseJson);
    setResults(responseJson.recipes)

  }
  useEffect(() => {
    setTimeout(fetchData, 1000);

    // return clearTimeout(timer)

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
