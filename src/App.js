import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import Logement from './pages/Logement/Logement';
import Error from './pages/Error/Error';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer'; // Chemin corrigé
import Header from './components/Header/Header'; // Chemin corrigé
import "./App.scss";
function App() {
  return (<>
    <div className="main-container">
    <Router>
      <Header />
     
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
     
     
    </Router>
    </div>
     <Footer />
     </>
  );
}


export default App;
