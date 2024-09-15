import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWord } from '../../redux/dictionary/dictionaryActions';
import styles from './ModalEliminarPalabra.module.css';

const ModalEliminarPalabra = ({ closeModal }) => {
  const [palabra, setPalabra] = useState('');  // Estado para la palabra ingresada
  const [error, setError] = useState('');      // Estado para los errores
  const dispatch = useDispatch();

  // Obtener las entradas actuales del diccionario desde el estado de Redux
  const dictionary = useSelector(state => state.dictionary.entries);

  // Función que maneja la eliminación de la palabra y la validación
  const handleEliminarPalabra = (e) => {
    e.preventDefault();

    // Verificar si el campo de palabra está vacío
    if (!palabra) {
      setError('El campo es obligatorio.');
      return;
    }

    // Buscar la palabra en el diccionario en cualquiera de los tres idiomas
    const wordToRemove = dictionary.find(
      entry => 
        entry.espanol.toLowerCase() === palabra.toLowerCase() ||
        entry.ingles.toLowerCase() === palabra.toLowerCase() ||
        entry.portugues.toLowerCase() === palabra.toLowerCase()
    );

    // Si la palabra no se encuentra en el diccionario, mostrar error
    if (!wordToRemove) {
      setError('La palabra no se encuentra en el diccionario.');
    } else {
      // Si la palabra existe, despachar la acción para eliminarla
      dispatch(removeWord(wordToRemove));
      closeModal();  // Cerrar el modal después de eliminar la palabra
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Botón "X" para cerrar el modal */}
        <button onClick={closeModal} className={styles.closeButton}>X</button>
        <h2>Eliminar Palabra</h2>
        <p>¿Qué palabra desea eliminar del diccionario?</p>
        <p>Puede escribir su palabra en ESPAÑOL, INGLÉS o PORTUGUÉS</p>
        <form onSubmit={handleEliminarPalabra}>
          <label>
            Palabra:
            <input 
              type="text" 
              value={palabra} 
              onChange={(e) => {
                setPalabra(e.target.value); 
                setError('');  // Limpiar el error cuando el usuario escribe
              }} 
              placeholder="Escribe la palabra"
            />
          </label>
          {/* Mostrar error si existe */}
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.deleteButton}>Eliminar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalEliminarPalabra;