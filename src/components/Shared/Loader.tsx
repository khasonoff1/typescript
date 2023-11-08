import loading from "../../assets/loading.gif";

import "./loader.scss"

const Loader = () => {
  return (
    <div className="loading">
      <img className="loading__img" src={loading} alt="Loader" />
    </div>
  );
};

export default Loader;
