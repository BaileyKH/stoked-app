import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
import { NavBar } from './Components/NavBar/NavBar';
import { ProductPage } from './Pages/ProductPage';
import { Footer } from './Components/Footer/Footer';
import { Categories } from './Pages/Categories';
import { Cart } from './Pages/Cart';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
