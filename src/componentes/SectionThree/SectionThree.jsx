import { Subsection } from "../Subsection/Subsection";
import SectionthreeCoins from "../../assets/imagenes/SectionthreeCoins.png";
import "./SectionThree.scss";
import { useSpring, animated } from "@react-spring/web";

export function SectionThree() {
  const { scale } = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.1, config: { duration: 1000 } }); // Ajusta la duración aquí
        await next({ scale: 1, config: { duration: 1000 } }); // Ajusta la duración aquí
      }
    },
    reset: true,
  });
  return (
    <div className="section-three">
      <Subsection
        labelTexto1={"Trade"}
        labelTexto2={"anything. No registration, no hassle."}
        labelTextoDown={
          "Trade any token on BNB Smart Chain in seconds, just by connnecting your wallet"
        }
        labelButton={"Trade Now"}
        labelLink={"Learn"}
      />
      <animated.img
        src={SectionthreeCoins}
        alt="coins"
        style={{ transform: scale.to((s) => `scale(${s}`) }}
      />
    </div>
  );
}
