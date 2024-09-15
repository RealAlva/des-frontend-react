import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';  // Import the Redux Provider
import store from './redux/store';  // Correct default import for the store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap the App component with Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);