import {useSpring, animated} from "@react-spring/web";

const ImageAnimation = ({imagen, texto}) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
      <animated.img
        style={props}
        src={imagen}
        alt={texto}
      />
    );
  };

export default ImageAnimation();