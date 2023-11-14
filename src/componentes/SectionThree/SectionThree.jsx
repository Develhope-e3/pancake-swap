import { Subsection } from "../Subsection/Subsection";
import SectionthreeCoins from "../../assets/imagenes/SectionthreeCoins.png";
import "./SectionThree.scss"

export function SectionThree() {
  return (
    <div className="section-three">
      <Subsection labelTexto1={"Trade"} labelTexto2={"anything. No registration, no hassle."} labelTextoDown={"Trade any token on BNB Smart Chain in seconds, just by connnecting your wallet"}
        labelButton={"Trade Now"} labelLink={"Learn"}
      />
      <div>
        <img src={SectionthreeCoins} alt="coins"></img>
      </div>
    </div>
  );
}
