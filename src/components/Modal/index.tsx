'use client'

import { useModalStore } from '@/storage/modalStorage/modalStorage';
import { useEffect, useState } from 'react';
import styles from './modal.module.scss';

export default function Modal () {
  const { isOpen, imageUrl, imageAspectRatio, closeModal } = useModalStore();

  const [shouldRender, setShouldRender] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimateOut(false);
    } else if (shouldRender) {
      setAnimateOut(true);
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 400); // debe coincidir con la duración de fadeOut
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleClose = () => {
    closeModal();
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`${styles.modalWrapper} ${animateOut ? styles.fadeOutBackground : styles.fadeInBackground}`}
      onClick={handleClose}
    >
      {/* <button className={styles.closeBtn} /> */}
      <div
        className={`${styles.certImg} ${animateOut ? styles.fadeOut : styles.fadeIn}`}
        style={{
          backgroundImage: `url('${imageUrl}')`,
          aspectRatio: `${imageAspectRatio}`
        }}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
}
