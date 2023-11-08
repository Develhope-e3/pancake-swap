import "./mainSection.scss";
import ImageMainSection from "../../assets/iconos/MainSection";
import Texto from "../Texto/Texto";
import Button from "../Button/Button.js";

const MainSectionBody = () => {
  return (
    <div className="main-body">
      <div className="text-section">
        <Texto
          size={"title-lg-bold"}
          color={"var(--color-titulo-lila)"}
          label={"The moon is made of pancakes."}
        />
        <Texto
          size={"title-ml-bold"}
          color={"var(--color-text)"}
          label={
            "Trade, earn, and win crypto on the most popular decentralized platform in the galaxy."
          }
        />
        <div className="buttons-section">
          <Button
            isPrimary={true}
            widthValue={"166px"}
            heightValue={"46px"}
            texto={"Connect Wallet"}
            colorTexto={"var(--color-button-primary)"}
            onClick={() => console.log("click")}
          />
          <Button
            isSecondary={true}
            texto={"Trade Now"}
            colorTexto={"var(--color-primary)"}
            onClick={() => console.log("click")}
          />
        </div>
      </div>
      <ImageMainSection />
    </div>
  );
};

export default MainSectionBody;
