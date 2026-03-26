import { useEffect, useRef, useState } from 'react';
import classes from './Galeria.module.css';

const imageNames = [
  'IMG_4639.JPG',
  'IMG_4977.JPG',
  'IMG_4987.JPG',
  'IMG_4661.JPG',
  'IMG_4590.JPG',
  'IMG_4893.JPG',
  'IMG_5048.JPG',
  'IMG_4557.JPG',
  'IMG_4848.JPG',
  'IMG_4834.JPG',
  'IMG_4883.JPG',
  'IMG_4902.JPG',
  'IMG_4863.JPG',
  'IMG_4954.JPG',
  'IMG_4786.JPG',
  'IMG_4821.JPG',
  'IMG_4930.JPG',
  'IMG_5040.JPG',
  'IMG_5042.JPG',
  'IMG_5033.JPG',
  'IMG_4816.JPG',
  'IMG_4939.JPG',
  'IMG_4812.JPG',
  'IMG_5006.JPG',
  'IMG_4459.JPG',
  'IMG_4467.JPG',
  'IMG_4508.JPG',
  'IMG_4533.JPG',
];

const galleryImages = imageNames.map((image) => ({
  src: `/La-Felipa/assets/gallery/${image}`,
  alt: `Galeria La Felipa ${image.replace('.JPG', '')}`,
}));

export const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const modalTouchStartX = useRef(null);
  const modalTouchEndX = useRef(null);

  useEffect(() => {
    // Reinicia el conteo cada vez que cambia la imagen, incluso por interacción manual.
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToModalPrevious();
      } else if (e.key === 'ArrowRight') {
        goToModalNext();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImageIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const goToModalPrevious = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToModalNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      goToNext();
    } else if (swipeDistance < -minSwipeDistance) {
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleModalTouchStart = (event) => {
    modalTouchStartX.current = event.changedTouches[0].clientX;
    modalTouchEndX.current = null;
  };

  const handleModalTouchMove = (event) => {
    modalTouchEndX.current = event.changedTouches[0].clientX;
  };

  const handleModalTouchEnd = () => {
    if (modalTouchStartX.current === null || modalTouchEndX.current === null) {
      return;
    }

    const swipeDistance = modalTouchStartX.current - modalTouchEndX.current;
    const minSwipeDistance = 45;

    if (swipeDistance > minSwipeDistance) {
      goToModalNext();
    } else if (swipeDistance < -minSwipeDistance) {
      goToModalPrevious();
    }

    modalTouchStartX.current = null;
    modalTouchEndX.current = null;
  };

  return (
    <div className={classes.galeria}>
      <div className={classes.galeriaContainer}>
        <h2>GALERÍA</h2>
        <p className={classes.galeriaSubtitle}>Descubri cada rincon de La Felipa</p>

        <div className={classes.carousel}>
          <button
            className={classes.navButton}
            type="button"
            aria-label="Imagen anterior"
            onClick={goToPrevious}
          >
            <img src="/La-Felipa/assets/flecha-izquierda.svg" alt="Anterior" />
          </button>

          <div
            className={classes.slidesViewport}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={classes.slidesTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={image.src} className={classes.slide}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    onClick={() => openModal(index)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className={classes.navButton}
            type="button"
            aria-label="Siguiente imagen"
            onClick={goToNext}
          >
            <img src="/La-Felipa/assets/flecha-derecha.svg" alt="Siguiente" />
          </button>
        </div>

        <div className={classes.dots}>
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`${classes.dot} ${index === currentIndex ? classes.dotActive : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedImageIndex !== null && (
        <div className={classes.modal} onClick={closeModal}>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleModalTouchStart}
            onTouchMove={handleModalTouchMove}
            onTouchEnd={handleModalTouchEnd}
          >
            <button className={classes.closeButton} onClick={closeModal} aria-label="Cerrar">
              ✕
            </button>

            <button
              className={`${classes.modalNavButton} ${classes.modalPrevButton}`}
              onClick={goToModalPrevious}
              aria-label="Imagen anterior"
            >
              <img src="/La-Felipa/assets/flecha-izquierda.svg" alt="Anterior" />
            </button>

            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className={classes.modalImage}
            />

            <button
              className={`${classes.modalNavButton} ${classes.modalNextButton}`}
              onClick={goToModalNext}
              aria-label="Siguiente imagen"
            >
              <img src="/La-Felipa/assets/flecha-derecha.svg" alt="Siguiente" />
            </button>

            <div className={classes.modalCounter}>
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
