import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './Pages/About';
import News from './Pages/News';
import Home from './Pages/Home';
import MarketPlace from './HomePages/MarketPlace';
import SchedulePlanner from './HomePages/SchedulePlanner';
import CropsInformation from './HomePages/CropsInformation';
import CropsName from './HomePages/CropsName';
import PhysicalFactors from './HomePages/PhysicalFactors';
import Buyer from './HomePages/Buyer';
import Seller from './HomePages/Seller';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/home' element={<Home />} />
      </Routes>

      <Routes>
        <Route path='/cropsInformation' element={<CropsInformation />} />
        <Route path='/schedulePlanner' element={<SchedulePlanner />} />
        <Route path='/marketPlace' element={<MarketPlace />} />
      </Routes>

      <Routes>
        <Route path='/CropsName' element={<CropsName />} />
        <Route path='/PhysicalFactors' element={<PhysicalFactors />} />
      </Routes>

      <Routes>
        <Route path='/seller' element={<Seller />} />
        <Route path='/buyer' element={<Buyer />} />
      </Routes>

    </div>
  );
}

export default App;
