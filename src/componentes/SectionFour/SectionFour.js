import { Subsection } from "../Subsection/Subsection";
import SectionFourData from "../../assets/imagenes/SectionFourData.png";
import "./SectionFour.scss"

export function SectionFour() {
  return (
    <div className="section-four">
      <div>
        <img src={SectionFourData} alt="coins"></img>
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
}
