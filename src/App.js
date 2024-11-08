import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import Logement from './pages/Logement/Logement';
import Error from './pages/Error/Error';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} /> {/* Ajoute une route par défaut pour la page d'accueil */}
          <Route path="/home" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} /> {/* Redirige toutes les routes non définies vers la page d'erreur */}
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
