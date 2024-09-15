import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './dictionary/dictionaryReducer';  // Import the dictionary reducer
import rootReducer from './reducers';  // Import the root reducer containing other reducers

// Consolidating the root reducer and dictionary reducer
const combinedReducer = {
  ...rootReducer,  // Preserve existing reducers from rootReducer
  dictionary: dictionaryReducer,  // Add the dictionary reducer for dictionary state
};

// Configure the Redux store with the combined reducers
const store = configureStore({
  reducer: combinedReducer,  // Pass the combined reducers to the store
});

export default store;