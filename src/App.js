
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import CatalogFullInfo from './components/CatalogFullInfo';
import Footer from './components/Footer';
import Completedprojects from './components/Completedprojects';
function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
    
      <Route path="/" element={<Home/>}/>

      //shesacvleli
      <Route path="/Catalog" element={<Catalog/>}/>
      <Route path="Catalog/:productid" element={<CatalogFullInfo/>}/>
      <Route path="Completedprojects" element={<Completedprojects/>}/>
    </Routes>
    <Footer/>
    </Router>
    
  )
}
export default App;

//16 xazi catalogis