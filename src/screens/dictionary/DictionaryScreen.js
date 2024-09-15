import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DictionaryEntry from '../../components/dictionary/DictionaryEntry';  
import ModalAgregarPalabra from '../../components/dictionary/ModalAgregarPalabra';  
import ModalEliminarPalabra from '../../components/dictionary/ModalEliminarPalabra';  
import ModalTraducirPalabra from '../../components/dictionary/ModalTraducirPalabra';  
import styles from './DictionaryScreen.module.css';

const DictionaryScreen = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);  
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);  
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);  
  const [selectedTerm, setSelectedTerm] = useState('');  

  const { entries = [] } = useSelector(state => state.dictionary || {});  

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  const handleOpenRemoveModal = () => setIsRemoveModalOpen(true);
  const handleCloseRemoveModal = () => setIsRemoveModalOpen(false);

  const handleOpenTranslateModal = () => setIsTranslateModalOpen(true);
  const handleCloseTranslateModal = () => setIsTranslateModalOpen(false);

  return (
    <div className={styles.dictionaryContainer}>
      <h1 className={styles.title}>DICTIONARY USIP</h1>
      <p className={styles.description}>
        Este <span className={styles.boldText}>módulo(diccionario)</span> corresponde al <span className={styles.boldText}>recuperatorio del</span> <span className={styles.redText}>modulo-7</span> ReactJS. 
        <span className={styles.boldUrl}>URL:</span>
        <a href="https://RealAlva.github.io/des-frontend-react" className={styles.url}>https://RealAlva.github.io/des-frontend-react</a>
      </p>

      {/* Dictionary Entries List */}
      <div className={styles.entriesList}>
        {entries.map((entry, index) => (
          <DictionaryEntry 
            key={index} 
            term={entry.term} 
            definition={entry.definition}
            onClick={() => setSelectedTerm(entry.term)}  
          />
        ))}
      </div>

      {/* Button Group */}
      <div className={styles.buttonGroup}>
        <div className={styles.topRow}>
          <button className={styles.button} onClick={handleOpenAddModal}>Agregar Palabra</button>
          <button className={styles.button} onClick={handleOpenRemoveModal}>Eliminar Palabra</button>
        </div>
        <div className={styles.bottomRow}>
          <button className={styles.button} onClick={handleOpenTranslateModal}>Traducir Palabra</button>
        </div>
      </div>

      {/* Modals */}
      {isAddModalOpen && <ModalAgregarPalabra closeModal={handleCloseAddModal} />}
      {isRemoveModalOpen && <ModalEliminarPalabra closeModal={handleCloseRemoveModal} />}
      {isTranslateModalOpen && <ModalTraducirPalabra closeModal={handleCloseTranslateModal} />}
    </div>
  );
};

export default DictionaryScreen;