import { Footer, Welcome, Navbar, Transaction, Services } from './components'

const App = () => {
  return (
    <div className="min-h-screen">

      <div className="gradient-bg-welcome">
      
        <Navbar />
       <Welcome /> 

        </div>
        
      
       <Footer />  
      <Transaction />  
      <Services /> 
         
        

    
    </div>
   
  );
}

export default App;
