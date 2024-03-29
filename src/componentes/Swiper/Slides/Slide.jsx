import classNames from "classnames";
import "./Slide.scss";
import { useSpring, animated } from "@react-spring/web";

const Slide = ({
  texto1EnPng,
  texto2EnPng,
  className,
  textoPrimario,
  textoSecundario,
  link,
  botonPrimario,
  botonSecundario,
  conejo,
  numeroDeSlide,
  backgroundImage,
}) => {
  const mappedClassname = classNames({
    imagen: true,
    conejo1: numeroDeSlide === 1,
    conejo2: numeroDeSlide === 2,
    conejo3: numeroDeSlide === 3,
    conejo4: numeroDeSlide === 4,
    conejo5: numeroDeSlide === 5,
  });
  const { translateY} = useSpring({
    to: { translateY: 8},
    from: { translateY: 0 },
    loop: true,
    config: { tension: 2, friction: 0 },
  });
  return (
    <div className="swiper-card-container">
      <img src={backgroundImage} alt="asd" className={className} />
      <div className="text-container">
       { texto1EnPng && <div className="text-container-png">
          <img
            src={texto1EnPng}
            alt="pancake"
            style={{ width: 132, height: 22 }}
          />
          
          <img
            src={texto2EnPng}
            alt="asd"
            style={{ width: "auto", height: "inherit" }}
          />
        </div>}
        <div className="text-central">
          {textoPrimario && textoPrimario}
          {textoSecundario && textoSecundario}
        </div>

        <div className="buttons-container">
          {botonPrimario && botonPrimario}
          {botonSecundario && botonSecundario}
          {link && link}
        </div>
      </div>

      {conejo && <animated.img  src={conejo} alt="swiper" className={mappedClassname}  style={{translateY}}/>}
    </div>
  );
};

export default Slide;
