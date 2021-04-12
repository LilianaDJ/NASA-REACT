import './App.css';
import Api from './components/Api'
import Navbar from './components/Navbar'
import PruebaProvider from './Context/PruebaProvider'



function App() {
  return (
    <div className="App">
  <PruebaProvider>
      <Navbar/>
      <Api/>
  </PruebaProvider>
    </div>
  );
}

export default App;
