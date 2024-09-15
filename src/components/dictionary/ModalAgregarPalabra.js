import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../redux/dictionary/dictionaryActions'; // Acción correcta
import styles from './ModalAgregarPalabra.module.css'; // Importar CSS module

const ModalAgregarPalabra = ({ closeModal }) => {
  const [espanol, setEspanol] = useState('');
  const [ingles, setIngles] = useState('');
  const [portugues, setPortugues] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  // Manejador del formulario para agregar la palabra
  const handleAgregarPalabra = (e) => {
    e.preventDefault();
    if (!espanol || !ingles || !portugues) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    const nuevaPalabra = {
      espanol,
      ingles,
      portugues,
    };

    dispatch(addWord(nuevaPalabra)); // Despacha la acción para agregar la palabra
    closeModal(); // Cierra el modal tras la acción exitosa
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Botón para cerrar el modal */}
        <button onClick={closeModal} className={styles.closeButton}>X</button>
        <h2>Traductor USIP</h2>
        <form onSubmit={handleAgregarPalabra}>
          <label>
            Español:
            <input 
              type="text" 
              value={espanol} 
              onChange={(e) => setEspanol(e.target.value)} 
              placeholder="Escribe en Español" 
            />
          </label>
          <label>
            Inglés:
            <input 
              type="text" 
              value={ingles} 
              onChange={(e) => setIngles(e.target.value)} 
              placeholder="Escribe en Inglés" 
            />
          </label>
          <label>
            Portugués:
            <input 
              type="text" 
              value={portugues} 
              onChange={(e) => setPortugues(e.target.value)} 
              placeholder="Escribe en Portugués" 
            />
          </label>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.addButton}>Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalAgregarPalabra;