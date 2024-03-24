import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
import { NavBar } from './Components/NavBar/NavBar';
import { ProductPage } from './Pages/ProductPage';
import { Footer } from './Components/Footer/Footer';
import { Categories } from './Pages/Categories';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
