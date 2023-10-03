import React from "react";
import "./mainSection.scss";
import ImageMainSection from "../../assets/iconos/MainSection";
import Texto from "../Texto/Texto";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const MainSectionBody = () => {
  return (
    <div className="main-body">
      <div className="text-section">
        <Texto
          size={"title-lg-bold"}
          color={"--color-titulo-lila"}
          label={"The moon is made of pancakes."}
        />
        <Texto
          size={"title-ml-bold"}
          color={"--color-text"}
          label={
            "Trade, earn, and win crypto on the most popular decentralized platform in the galaxy."
          }
        />
        <div className="buttons-section">
          <ButtonPrimary
            className={"button-primary"}
            widthValue={"165px"}
            heightValue={"48px"}
            texto={"Connect Wallet"}
            onClick={""}
          />
          <ButtonPrimary
            className={"button-secondary"}
            widthValue={"132px"}
            heightValue={"48px"}
            texto={"Trade Now"}
            onClick={""}
          />

        </div>
      </div>
      <ImageMainSection />
    </div>
  );
};

export default MainSectionBody;
