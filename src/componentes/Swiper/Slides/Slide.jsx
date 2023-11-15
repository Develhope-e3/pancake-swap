import classNames from "classnames";
import Button from "../../Button/Button";
import Link from "../../Link/Link";
import Texto from "../../Texto/Texto";
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
    <>
      <img src={backgroundImage} alt="asd" className={className}/>
      <div className="text-container">
        {textoPrimario && <Texto/>}
        {textoSecundario && <Texto/>}
        {descripcion && <h1>{descripcion}</h1>}
      </div>

      <div className="buttons-container">
        {botonPrimario && <Button />}
        {botonSecundario && <Button />}
        {link && <Link />}
      </div>

      {conejo && <img src={conejo} alt="swiper" className={mappedClassname} />}
    </>
  );
};
export default Slide;
