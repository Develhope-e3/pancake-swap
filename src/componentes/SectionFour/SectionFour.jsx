import { Subsection } from "../Subsection/Subsection";
import SectionFourData from "../../assets/imagenes/SectionFourData.png";
import "./SectionFour.scss"
import { useSpring, animated } from "@react-spring/web";

export function SectionFour() {
  const { translateY } = useSpring({
    to: { translateY: 8 }, // Cambia este valor para ajustar la altura de flotación
    from: { translateY: 0 },
    loop: true, // Para que la animación se repita
    config: { tension: 10, friction: 0 },// cambiar tension para cambiar el efecto de flotar
  });
  return (
    <div className="section-four">
      <div>
        <animated.img  src={SectionFourData} alt="data" style={{translateY}}/>
      </div>
      <Subsection
        labelTexto1={"Earn"}
        labelTexto2={"passive income with crypto"}
        labelTextoDown={
          "PancakeSwap makes it easy to make your crypto work for you"
        }
        labelButton={"Explore"}
        labelLink={"Learn"}
      />
    </div>
  );
};