import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWord, removeWord, translateWord } from '../../redux/dictionary/dictionarySlice';
import './DictionaryScreen.css';

const DictionaryScreen = () => {
  const [word, setWord] = useState(''); // Maneja la palabra en inglés
  const [translation, setTranslation] = useState({ es: '', en: '', pt: '' }); // Traducciones
  const [inputWord, setInputWord] = useState(''); // Para eliminar/traducir palabras
  const [translatedWord, setTranslatedWord] = useState(''); // Para mostrar la traducción
  const dispatch = useDispatch();
  
  // Obtener la lista de palabras del estado de Redux
  const words = useSelector(state => state.dictionary.words);

  // Función para agregar una nueva palabra al diccionario
  const handleAddWord = () => {
    dispatch(addWord({ word, translations: translation }));
    setWord('');
    setTranslation({ es: '', en: '', pt: '' });
  };

  // Función para eliminar una palabra del diccionario
  const handleRemoveWord = () => {
    dispatch(removeWord(inputWord));
    setInputWord('');
  };

  // Función para traducir una palabra en el diccionario
  const handleTranslateWord = () => {
    const result = dispatch(translateWord(inputWord));
    if (result) {
      setTranslatedWord(`Spanish: ${result.es}, English: ${result.en}, Portuguese: ${result.pt}`);
    } else {
      setTranslatedWord('Word not found.');
    }
  };

  return (
    <div className="dictionary">
      <h2>Dictionary Module</h2>
      
      {/* Formulario para agregar palabra */}
      <div>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Word in English"
        />
        <input
          type="text"
          value={translation.es}
          onChange={(e) => setTranslation({ ...translation, es: e.target.value })}
          placeholder="Word in Spanish"
        />
        <input
          type="text"
          value={translation.pt}
          onChange={(e) => setTranslation({ ...translation, pt: e.target.value })}
          placeholder="Word in Portuguese"
        />
        <button onClick={handleAddWord}>Add Word</button>
      </div>

      {/* Formulario para eliminar palabra */}
      <div>
        <input
          type="text"
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
          placeholder="Word to Remove"
        />
        <button onClick={handleRemoveWord}>Remove Word</button>
      </div>

      {/* Formulario para traducir palabra */}
      <div>
        <input
          type="text"
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
          placeholder="Word to Translate"
        />
        <button onClick={handleTranslateWord}>Translate Word</button>
        {translatedWord && <textarea readOnly value={translatedWord} />}
      </div>

      {/* Mostrar lista de palabras almacenadas en el diccionario */}
      <div className="word-list">
        <h3>Current Words in Dictionary</h3>
        {words && words.length > 0 ? (
          <ul>
            {words.map((wordItem, index) => (
              <li key={index}>
                {wordItem.word} - Spanish: {wordItem.translations.es}, English: {wordItem.translations.en}, Portuguese: {wordItem.translations.pt}
              </li>
            ))}
          </ul>
        ) : (
          <p>No words available</p>
        )}
      </div>
    </div>
  );
};

export default DictionaryScreen;