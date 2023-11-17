import classNames from "classnames";
import "./Slide.scss";
const Slide = ({
  texto1EnPng,
  texto2EnPng,
  className,
  textoPrimario,
  textoSecundario,
  descripcion,
  link,
  botonPrimario,
  botonSecundario,
  conejo,
  numeroDeSlide,
  backgroundImage,
}) => {
  const mappedClassname = classNames({
    imagen: true,
    conejoVolando: numeroDeSlide === 1,
    conejoConVelasJaponesas: numeroDeSlide === 2,
    conejoFreezado: numeroDeSlide === 3,
    conejoConHambre: numeroDeSlide === 4,
  });

  return (
    <div className="swiper-card-container">
      <img src={backgroundImage} alt="asd" className={className} />
      <div className="text-container">
        <div className="text-container-png">
          <img
            src={texto1EnPng}
            alt="pancake"
            style={{ width: 132, height: 22 }}
          />
          |{" "}
          <img src={texto2EnPng} alt="asd" style={{ width: 77, height: 14 }} />
        </div>
        <div className="text-central">
          {textoPrimario && textoPrimario}
          {textoSecundario && textoSecundario}
        </div>
        {descripcion && <h1>{descripcion}</h1>}

        <div className="buttons-container">
          {botonPrimario && botonPrimario}
          {botonSecundario && botonSecundario}
          {link && link}
        </div>
      </div>

      {conejo && <img src={conejo} alt="swiper" className={mappedClassname} />}
    </div>
  );
};
export default Slide;
