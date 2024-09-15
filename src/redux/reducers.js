import { combineReducers } from 'redux';
import dictionaryReducer from './dictionary/dictionaryReducer'; // Importamos el reducer

// aca importamos todos los reducers
import defaultReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
    form: formReducer,
    dictionary: dictionaryReducer, // Añadimos el reducer al combineReducers
});

export default rootReducer;