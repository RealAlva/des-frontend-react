import { ADD_ENTRY, REMOVE_ENTRY, ADD_WORD, REMOVE_WORD } from './dictionaryActions';

const initialState = {
  entries: [],       // Array to store dictionary entries
  loading: false,    // For potential loading state
  error: null,       // To handle errors
};

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case REMOVE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter(entry => entry.term !== action.payload.term),
      };

    case ADD_WORD:
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case REMOVE_WORD:
      return {
        ...state,
        entries: state.entries.filter(
          entry => 
            entry.espanol !== action.payload && 
            entry.ingles !== action.payload && 
            entry.portugues !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default dictionaryReducer;