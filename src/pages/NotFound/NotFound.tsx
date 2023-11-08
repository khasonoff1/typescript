import { useNavigate } from "react-router-dom";
import Notfound from "../../assets/404.gif";
import useAuth from "../../zustand/auth";
import "./style.scss";

const NotFound = () => {
    const navigate = useNavigate();
  const { isAuth, role } = useAuth();

  return (
    <div className="notfound">
      <img
        className="notfound__img"
        src={Notfound}
        alt="img"
        onClick={() =>
          navigate(
            isAuth && (role === "admin" || role === "client")
              ? "/dashboard"
              : "/"
          )
        }
      />
    </div>
  );
};

export default NotFound;
