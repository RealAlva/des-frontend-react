import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './dictionary/dictionarySlice';
// Mantener el rootReducer existente
import rootReducer from './reducers';

// Combina el rootReducer existente con el nuevo reducer 'dictionary'
const combinedReducer = {
  ...rootReducer,          // Mantenemos los reducers existentes
  dictionary: dictionaryReducer,  // Añadimos el nuevo reducer 'dictionary'
};

// Configurar el store usando configureStore de Redux Toolkit
export const store = configureStore({
  reducer: combinedReducer,  // Pasamos los reducers combinados
});

export default store;