import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Data from './components/Data';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Data/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
