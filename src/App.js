import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DictionaryScreen from './screens/dictionary/DictionaryScreen';
import ProductsScreen from './screens/Product';
import LoginForm from './screens/Forms/LoginForm';
import RouterConfig from './router/router';

const App = () => {
  return (
    <div>
      <RouterConfig /> {/* Ensure Router is only declared here */}
    </div>
  );
};

export default App;