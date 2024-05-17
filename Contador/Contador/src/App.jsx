import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(100)


  function aumentar() {
    if(count<200) setCount((count) => count + 8)

  }

  function resta() {
    if(count >-200) setCount((count) => count - 8)

  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="zi">
          <button onClick={() =>resta()}>
            Restar
          </button>
          <h3>
            count is {count}
          </h3>
          <button onClick={() => aumentar() }>
            Aumentar
          </button>
        </div>
        <p>
          Segundo contador:
          {count2}
        </p>
        <p>
          <button onClick={() => aumentar()}>Aumentar el contador 2</button>
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
