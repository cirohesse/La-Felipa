import { useEffect, useRef, useState } from 'react';
import classes from './Galeria.module.css';

const imageNames = [
  'IMG_4557.JPG',
  'IMG_4590.JPG',
  'IMG_4639.JPG',
  'IMG_4661.JPG',
  'IMG_4711.JPG',
  'IMG_4786.JPG',
  'IMG_4812.JPG',
  'IMG_4816.JPG',
  'IMG_4821.JPG',
  'IMG_4834.JPG',
  'IMG_4848.JPG',
  'IMG_4863.JPG',
  'IMG_4883.JPG',
  'IMG_4893.JPG',
  'IMG_4902.JPG',
  'IMG_4930.JPG',
  'IMG_4939.JPG',
  'IMG_4954.JPG',
  'IMG_4977.JPG',
  'IMG_4987.JPG',
  'IMG_5006.JPG',
  'IMG_5033.JPG',
  'IMG_5040.JPG',
  'IMG_5042.JPG',
  'IMG_5048.JPG',
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
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    // Reinicia el conteo cada vez que cambia la imagen, incluso por interacción manual.
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
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

  return (
    <section className={classes.galeria}>
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
            {'<'}
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
              {galleryImages.map((image) => (
                <div key={image.src} className={classes.slide}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
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
            {'>'}
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
    </section>
  );
};
