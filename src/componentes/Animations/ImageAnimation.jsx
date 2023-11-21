
const ImageAnimation = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  
    return (
      <animated.img
        style={props}
        src="tu_imagen.jpg"
        alt="Tu imagen"
      />
    );
  };
  