import React from "react";
import { Section, MainSection } from "../componentes/Section/Section";
import { MiddleSection } from "../componentes/Section/middleSection/middleSection";

const Home = () => {
  return (
    <div>
      <MainSection>
        <Section></Section>
        <MiddleSection isColCenter={true}>

        </MiddleSection>
      </MainSection>
    </div>
  );
};

export default Home;
