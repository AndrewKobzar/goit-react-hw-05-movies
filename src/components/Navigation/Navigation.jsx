import { useLocation, NavLink } from 'react-router-dom';
import s from './Navigation.module.css'
const Navigation = () => {
  const location = useLocation();

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink
          className={s.NavLink}
          style={({ isActive }) => ({
            color: isActive ? 'black' : 'green',
            background: isActive ? 'red' : '#f0f0f0',
          })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={s.NavLink}
          style={({ isActive }) => ({
            color: isActive ? 'black' : 'green',
            background: isActive ? '  red' : '#f0f0f0',
          })}
          to="movies"
          state={location}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;

