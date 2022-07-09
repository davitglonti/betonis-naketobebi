
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import CatalogFullInfo from './components/CatalogFullInfo';
function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/Catalog" element={<Catalog/>}/>
      <Route path="/Catalog/:product" element={<CatalogFullInfo/>}/>
    </Routes>
    </Router>
    
  )
}
export default App;
