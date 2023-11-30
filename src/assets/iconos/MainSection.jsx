import asset71 from "../imagenes/asset71.png";
import asset67 from "../imagenes/asset 67.png";
import asset65 from "../imagenes/asset 65.png";
import { animated, useSpring } from "@react-spring/web";

const ImageMainSection = () => {
  const { translateY } = useSpring({
    to: { translateY: 2 },
    from: { translateY: 0 },
    loop: true,
    config: { tension: 10, friction: 0 },
  });

  const { translateYTwo } = useSpring({
    to: { translateYTwo: 3 },
    from: { translateYTwo: 0 },
    loop: true,
    config: { tension: 13, friction: 0 },
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
