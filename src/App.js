import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
        <Routes>

          <Route exact path="/" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/skills" element={<Skills />} />
     
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
