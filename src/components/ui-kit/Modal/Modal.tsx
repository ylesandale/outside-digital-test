import React from 'react';
import styles from './Modal.module.scss';

interface IModal {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<IModal> = ({ children, open, onClose }) => {
  if (open) {
    return (
      <div className={styles.container}>
        <div className={styles.layer}></div>
        <div className={styles.wrapper}>
          {children}
          <div onClick={onClose} className={styles.close}></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
