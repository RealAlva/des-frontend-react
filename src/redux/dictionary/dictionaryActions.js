export const ADD_ENTRY = 'ADD_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';
export const ADD_WORD = 'ADD_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';  // Action for removing a word
export const TRANSLATE_WORD = 'TRANSLATE_WORD';  // New action for translating a word

// Action for adding an entry
export const addEntry = (term, definition) => ({
  type: ADD_ENTRY,
  payload: { term, definition }
});

// Action for removing an entry by term
export const removeEntry = (term) => ({
  type: REMOVE_ENTRY,
  payload: { term }
});

// Action for adding a word in multiple languages
export const addWord = (word) => ({
  type: ADD_WORD,
  payload: word,
});

// Action for removing a word in any language
export const removeWord = (word) => ({
  type: REMOVE_WORD,
  payload: word,
});

// Action for translating a word based on target language
export const translateWord = (palabra, idiomaDestino) => ({
  type: TRANSLATE_WORD,
  payload: { palabra, idiomaDestino }
});