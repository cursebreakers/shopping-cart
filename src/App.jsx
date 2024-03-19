import { useState } from 'react'
import giftCon from '../public/gift.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navBar">

      </nav>
      <h1>Storefront</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Served: {count}
        </button>
      </div>
      <a href="https://cursebreakers.net">Cursebreakers LLC</a>
    </>
  )
}

export default App
