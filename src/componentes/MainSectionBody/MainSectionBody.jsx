import React from "react";
import "./mainSection.scss";
import ImageMainSection from "../../assets/iconos/MainSection";
import Texto from "../Texto/Texto";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const MainSectionBody = () => {
  return (
    <div className="main-body">
      <div>
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
          
        </div>
      </div>
      <ImageMainSection />
    </div>
  );
};

export default MainSectionBody;
