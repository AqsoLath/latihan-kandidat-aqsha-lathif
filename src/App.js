import './App.css';
import './Styles/style.css'
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Pages, {HalamanPages} from './Pages'
import Articles, {HalamanArticles} from './Articles';
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <div>
        {/* Gunakan react router untuk buat halamannya, agar halamannya tidak perlu load*/}
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/pages' element={<Pages />} /> 
          <Route path='/:halamanTitle' element={<HalamanPages />} /> 
          <Route path='/articles' element={<Articles />} /> 
          <Route path='/articles/:articleTitle' element={<HalamanArticles />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
