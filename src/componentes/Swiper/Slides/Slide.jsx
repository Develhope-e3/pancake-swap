import classNames from "classnames";
import Button from "../../Button/Button";
import Link from "../../Link/Link";
const Slide = ({
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
      <img src={backgroundImage} alt="asd" />
      <div className="text-container">
        {textoPrimario && <h1>{textoPrimario}</h1>}
        {textoSecundario && <h1>{textoSecundario}</h1>}
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
