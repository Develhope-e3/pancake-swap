import classNames from "classnames";
import './Slide.scss'
const Slide = ({
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
      <img src={backgroundImage} alt="asd" className={className}/>
      <div className="text-container">
        {textoPrimario && textoPrimario}
        {textoSecundario && textoSecundario}
        {descripcion && <h1>{descripcion}</h1>}
      </div>

      <div className="buttons-container">
        {botonPrimario && botonPrimario}
        {botonSecundario && botonSecundario}
        {link && link}
      </div>

      {conejo && <img src={conejo} alt="swiper" className={mappedClassname} />}
    </div>
  );
};
export default Slide;
