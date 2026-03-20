import classNames from 'classnames';
import classes from './MenuToggle.module.css';

export const MenuToggle = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      className={classNames(classes.menuToggle, { [classes.active]: menuOpen })}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
