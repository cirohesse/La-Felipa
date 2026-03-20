import classes from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <img
        src="/La-Felipa/assets/hero.jpg"
        alt="La Felipa - Cabañas en La Cumbrecita"
        className={classes.heroImage}
      />
      <div className={classes.heroOverlay}></div>
      <div className={classes.heroContent}>
        <h2>La Felipa</h2>
        <p className={classes.heroSubtitle}>Tu lugar en La Cumbrecita</p>
      </div>
    </section>
  );
};
