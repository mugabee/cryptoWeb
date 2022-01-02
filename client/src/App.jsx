import { Navbar, Loader, Footer, Services, Transaction, Welcome } from './components';
const App = () => {
  return (
    <div className="min-h-screen">
      
      <div className="gradient-bg-welcome">
        <Welcome />
        <Navbar />
        <div>
          <Services />
          <Transaction />
          <Footer />
        </div>

      </div>
      hello
    </div>
  )
}

export default App
