import { NavLink } from "react-router-dom";

import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h4 className="footer__title">Our email</h4>
        <p className="footer__desc">khasonoff1@gmail.com</p>
      </div>
      <div className="footer__right">
        <NavLink className="footer__link" to="https://youtube.com">
          <img width="30" src={youtube} alt="youtube" />
        </NavLink>
        <NavLink className="footer__link" to="https://instagram.com">
          <img width="30" src={instagram} alt="instagram" />
        </NavLink>
        <NavLink className="footer__link" to="https://facebook.com">
          <img width="30" src={facebook} alt="facebook" />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
