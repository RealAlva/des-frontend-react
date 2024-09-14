import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: [],  // [{ word: 'Lunes', translations: { es: 'Lunes', en: 'Monday', pt: 'Segunda-feira' } }]
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload);  // Agrega la palabra en los tres idiomas
    },
    removeWord: (state, action) => {
      state.words = state.words.filter(
        word =>
          word.word !== action.payload &&
          word.translations.es !== action.payload &&
          word.translations.en !== action.payload &&
          word.translations.pt !== action.payload
      );
    },
    translateWord: (state, action) => {
      const word = state.words.find(
        w =>
          w.word === action.payload ||
          w.translations.es === action.payload ||
          w.translations.en === action.payload ||
          w.translations.pt === action.payload
      );
      return word ? word.translations : null;
    },
  },
});

export const { addWord, removeWord, translateWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;