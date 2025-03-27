import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Employee } from './Employee'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [id, setId] = useState(1)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="card">
        <select value={id} onChange={e => setId(e.target.value)}>
          <option value={1}> Employee 1 </option>
          <option value={2}> Employee 2 </option>
          <option value={3}> Employee 3 </option>
        </select>

        <Employee id={id} />
      </div>

    </>
  )
}

export default App
