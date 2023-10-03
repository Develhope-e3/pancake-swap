import React from "react";
import { Section, MainSection } from "../componentes/Section/Section";
import { MiddleSection } from "../componentes/Section/middleSection/middleSection";
import MainSectionBody from "../componentes/MainSectionBody/MainSectionBody";

const Home = () => {
  return (
    <div>
      <MainSection
        className={"main-section"}
        children={
          <div>
            <MainSectionBody />
          </div>
        }
      ></MainSection>
    </div>
  );
};

export default Home;
