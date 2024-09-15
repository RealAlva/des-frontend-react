import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import RouterConfig from './router/router'; // Asegura que estás usando tu configuración de rutas

const App = () => {
  return (
    <BrowserRouter basename="/des-frontend-react">
      {/* Aquí incluyes tu RouterConfig que contiene las rutas */}
      <RouterConfig />
    </BrowserRouter>
  );
};

export default App;