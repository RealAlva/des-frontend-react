import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ModalTraducirPalabra.module.css';

const ModalTraducirPalabra = ({ closeModal }) => {
  const [palabra, setPalabra] = useState('');  // Estado para la palabra a traducir
  const [idiomaDestino, setIdiomaDestino] = useState('');  // Estado para el idioma destino
  const [traduccion, setTraduccion] = useState('');  // Estado para la traducción
  const [error, setError] = useState('');  // Estado para manejar errores

  // Obtener las entradas del diccionario desde Redux
  const dictionary = useSelector(state => state.dictionary.entries);

  // Función para manejar la traducción de la palabra
  const handleTraducir = (e) => {
    e.preventDefault();

    // Validación para campos vacíos
    if (!palabra || !idiomaDestino) {
      setError('Por favor ingrese la palabra y seleccione el idioma.');
      return;
    }

    // Buscar la palabra en el diccionario
    const wordEntry = dictionary.find(
      entry =>
        entry.espanol.toLowerCase() === palabra.toLowerCase() ||
        entry.ingles.toLowerCase() === palabra.toLowerCase() ||
        entry.portugues.toLowerCase() === palabra.toLowerCase()
    );

    // Si no se encuentra, mostrar error
    if (!wordEntry) {
      setError('No se encontró ninguna traducción para esta palabra.');
    } else {
      switch(idiomaDestino) {
        case 'Español':
          setTraduccion(wordEntry.espanol);
          break;
        case 'Inglés':
          setTraduccion(wordEntry.ingles);
          break;
        case 'Portugués':
          setTraduccion(wordEntry.portugues);
          break;
        default:
          setTraduccion('Idioma no soportado.');
      }
      setError('');  // Limpiar error cuando se realiza la traducción
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Mover el botón "X" al inicio del modal */}
        <button onClick={closeModal} className={styles.closeButton}>X</button>
        <h2>Traductor USIP</h2>
        <form onSubmit={handleTraducir}>
          <label>
            Palabra a traducir:
            <input
              type="text"
              value={palabra}
              onChange={(e) => {
                setPalabra(e.target.value);
                setError('');
              }}
              placeholder="Escribe la palabra"
            />
          </label>
          <label>
            Idioma de traducción:
            <select value={idiomaDestino} onChange={(e) => setIdiomaDestino(e.target.value)}>
              <option value="">Selecciona un idioma</option>
              <option value="Español">Español</option>
              <option value="Inglés">Inglés</option>
              <option value="Portugués">Portugués</option>
            </select>
          </label>
          {/* Mostrar mensaje de error si existe */}
          {error && <p className={styles.error}>{error}</p>}
          <textarea value={traduccion} readOnly placeholder="Aquí aparecerá la traducción" />
          <button type="submit">Traducir</button>
        </form>
      </div>
    </div>
  );
};

export default ModalTraducirPalabra;