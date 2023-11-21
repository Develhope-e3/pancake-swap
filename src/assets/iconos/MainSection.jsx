import asset71 from "../imagenes/asset71.png";
import asset67 from "../imagenes/asset 67.png";
import asset65 from "../imagenes/asset 65.png";
import { animated, useSpring } from "@react-spring/web";
const ImageMainSection = () => {
  const { translateY } = useSpring({
    to: { translateY: 2 }, // Cambia este valor para ajustar la altura de flotación
    from: { translateY: 0 },
    loop: true, // Para que la animación se repita
    config: { tension: 10, friction: 0 },// cambiar tension para cambiar el efecto de flotar
  });

  const { translateYTwo } = useSpring({
    to: { translateYTwo: 3 }, // Cambia este valor para ajustar la altura de flotación
    from: { translateYTwo: 0 },
    loop: true, // Para que la animación se repita
    config: { tension: 13, friction: 0 },// cambiar tension para cambiar el efecto de flotar
  });

  return (
    <div className="main-imagen">
      <animated.img
        style={{
          transform: translateYTwo.to((y) => `translateY(${y}px)`),
        }}
        src={asset71}
        alt="astronauta"
      />
      <animated.img
        style={{
          transform: translateY.to((y) => `translateY(${y}px)`),
        }}
        src={asset67}
        alt="estrella"
        className={"estrella-1"}
      />
      <animated.img
        style={{
          transform: translateY.to((y) => `translateY(${y}px)`),
        }}
        src={asset65}
        alt="estrella"
        className={"estrella-2"}
      />
    </div>
  );
};

export default ImageMainSection;
