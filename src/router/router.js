import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DictionaryScreen from '../screens/dictionary/DictionaryScreen';
import ProductsScreen from '../screens/Product';
import LoginForm from '../screens/Forms/LoginForm';
import MainPage from '../components/MainPage';
import Navbar from '../components/Navbar';

const RouterConfig = () => {
  return (
    <HashRouter basename="/des-frontend-react">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dictionary" element={<DictionaryScreen />} />
      </Routes>
    </HashRouter>
  );
};

export default RouterConfig;