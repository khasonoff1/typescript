import "./home.scss"
import Image from "../assets/programming.gif"

const HomePage = () => {
  return (
    <div className='hero'>
      <div className="hero__left">
        <h4 className="hero__title">Portfolio</h4>
        <p className="hero__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti natus labore libero voluptas qui ducimus, quis, eveniet, magnam cum cupiditate ea rerum dolorum in tempora necessitatibus! Reprehenderit similique nostrum doloribus!</p>
      </div>
      <div className="hero__right">
        <img src={Image} alt="img" />
      </div>
    </div>
  )
}

export default HomePage