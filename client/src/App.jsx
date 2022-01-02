import { useState } from 'react'
import { Navbar, Loader, Footer, Services, Transaction, Welcome } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <h1 class="text-3xl  font-bold underline">
    Hello world!
  </h1>
    </div>
  )
}

export default App
