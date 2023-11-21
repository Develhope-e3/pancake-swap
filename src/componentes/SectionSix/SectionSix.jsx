import "./SectionSix.scss";
import { Subsection } from "../Subsection/Subsection";
import SectionSixCoins from "../../assets/imagenes/SectionSixCoins.png";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export function SectionSix() {
  const { translateY } = useSpring({
    to: { translateY: 5 }, // Cambia este valor para ajustar la altura de flotación
    from: { translateY: 0 },
    loop: true, // Para que la animación se repita
    config: { tension: 15, friction: 0 }, // cambiar tension para cambiar el efecto de flotar
  });
  return (
    <div className="section-six">
      <Subsection
        labelTexto1={"CAKE"}
        labelTexto2={"make our world go round."}
        labelTextoDown={
          "CAKE tokens is at the heart of the PankakeSwap ecosystem. Buy it ,win it, farm it,spend it, stake it... heck, you can even vote with it!"
        }
        labelButton={"Buy CAKE"}
        labelLink={"Learn"}
      />

      <animated.img
        src={SectionSixCoins}
        alt="coins"
        style={{ translateY }}
      />
    </div>
  );
}
