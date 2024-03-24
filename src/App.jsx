import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
import { NavBar } from './Components/NavBar/NavBar';
import { ProductPage } from './Pages/ProductPage';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
