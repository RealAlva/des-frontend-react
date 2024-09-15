import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import MainPage from "../components/MainPage";  // Importa el componente MainPage
import DictionaryScreen from '../screens/dictionary/DictionaryScreen'; // Importamos el componente


const RouterConfig = () => {
  return (
    <BrowserRouter basename="/des-frontend-react"> {/* Add basename */}
      <Routes>
        {/* Update the default route to MainPage */}
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dictionary" element={<DictionaryScreen />} /> {/* Nueva ruta */}

      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;