import React from 'react';
import styles from '../../screens/dictionary/DictionaryScreen.module.css'; 

const DictionaryEntry = ({ term, definition, onClick }) => {
  return (
    <div onClick={onClick} className={styles.entry} style={{ cursor: 'pointer' }}>
      <strong>{term}</strong>: {definition}
    </div>
  );
};

export default DictionaryEntry;