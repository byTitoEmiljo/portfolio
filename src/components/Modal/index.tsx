'use client'

import { useModalStore } from '@/storage/modalStore';
import { useEffect, useState } from 'react';
import CrossIcon from '@public/assets/icons/decorations/cross.svg'
import TransferIcon from '@public/assets/icons/decorations/transfermajor.svg'
import styles from './modal.module.scss';

export default function Modal () {
  const { 
    isOpen, 
    nomTitle,
    nomBody,
    nomImg,
    nomLink,
    cerImgUrl, 
    cerImgAspectRatio, 
    modalType, 
    closeModal 
  } = useModalStore();

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
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`${styles.modalWrapper} ${animateOut ? styles.fadeOutBackground : styles.fadeInBackground}`}
      onClick={closeModal}
    >
      {
        modalType === 'normal' && (
          <div className={`${styles.normalModal} ${animateOut ? styles.fadeOut : styles.fadeIn}`}>
            <CrossIcon className={styles.closeBtn} onClick={closeModal} />
            {/* <a href={nomLink?.toString()} target='_blanck'><TransferIcon className={styles.transferIcon} /></a> */}
            <img src={nomImg ?? ''} alt={`${nomTitle} Image`} />
            <h1>{nomTitle} <a href={nomLink?.toString()} target='_blanck'><TransferIcon className={styles.transferIcon} /></a></h1>
            <div dangerouslySetInnerHTML={{ __html: nomBody ?? '' }} />
          </div>
        )
      }
      {
        modalType === 'certifications' && (
          <div
            className={`${styles.certImg} ${animateOut ? styles.fadeOut : styles.fadeIn}`}
            style={{
              backgroundImage: `url('${cerImgUrl}')`,
              aspectRatio: `${cerImgAspectRatio}`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <CrossIcon className={styles.closeBtn} onClick={closeModal} />
          </div>
        )
      }
    </div>
  );
}
