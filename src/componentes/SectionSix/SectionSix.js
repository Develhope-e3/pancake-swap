import "./SectionSix.scss";
import { Subsection } from "../Subsection/Subsection";
import SectionSixCoins from "../../assets/imagenes/SectionSixCoins.png";

export function SectionSix() {
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
      <div>
        <img src={SectionSixCoins} alt="coins"></img>
      </div>
    </div>
  );
}
