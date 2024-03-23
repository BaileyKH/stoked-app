import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home';
import { NavBar } from './Components/NavBar/NavBar';
import { Footer } from './Components/Footer/Footer';
import { ProductPage } from './Pages/ProductPage';

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
