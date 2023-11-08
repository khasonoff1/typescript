import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <h1 className="header__logo">Portfolio</h1>
      </NavLink>
      <ul className="header__list">
        <li className="header__item">
          <NavLink className="header__link" to="/">
            Home
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink className="header__link" to="/skillsPage">
            Skills
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink className="header__link" to="/educationPage">
            Education
          </NavLink>
        </li>
        <NavLink to="/auth/login" className="header__btn">Login</NavLink>
      </ul>
    </header>
  );
};

export default Header;
