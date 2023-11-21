import { Subsection } from "../Subsection/Subsection";
import SectionthreeCoins from "../../assets/imagenes/SectionthreeCoins.png";
import "./SectionThree.scss"
import { animated, useSpring } from "@react-spring/web";

export function SectionThree() {
  const { translateY } = useSpring({
    to: { translateY: 10 }, // Cambia este valor para ajustar la altura de flotación
    from: { translateY: 0 },
    loop: true, // Para que la animación se repita
    config: { tension: 5, friction: 0 },// cambiar tension para cambiar el efecto de flotar
  });
  return (
    <div className="section-three">
      <Subsection labelTexto1={"Trade"} labelTexto2={"anything. No registration, no hassle."} labelTextoDown={"Trade any token on BNB Smart Chain in seconds, just by connnecting your wallet"}
        labelButton={"Trade Now"} labelLink={"Learn"}
      />
      <div>
      <animated.img style={{translateY}} src={SectionthreeCoins} alt="coins"/>
      </div>
    </div>
  );
}
