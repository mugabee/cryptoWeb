import { useState } from 'react'
import { Navbar, Loader, Footer, Services, Transaction, Welcome } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />

      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  )
}

export default App;
