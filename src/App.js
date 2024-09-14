import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import DictionaryScreen from './screens/dictionary/DictionaryScreen';
import Home from './screens/Products/_componentes/Home';  // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router basename="/des-frontend-react">
      {/* Mantener la barra de navegación global */}
      <Navbar />

      {/* Configuración de las rutas */}
      <Routes>
        {/* Ruta del nuevo módulo dictionary */}
        <Route path="/dictionary" element={<DictionaryScreen />} />
        
        {/* Ruta principal para Home */}
        <Route path="/" element={<Home />} />
        
        {/* Rutas dinámicas (cualquier otra ruta) */}
        <Route path="/*" element={<Outlet />} />
      </Routes>
    </Router>
  );
}

export default App;