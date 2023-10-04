import React from "react";
import { Section, MainSection } from "../componentes/Section/Section";
import MainSectionBody from "../componentes/MainSectionBody/MainSectionBody";
import NuevoIcono from "../componentes/Icono/NuevoIcono.jsx";
import Texto from "../componentes/Texto/Texto.js";
import { Section2, Box } from "../componentes/Section/Section2/Section2.js";

const Home = () => {
  return (
    <div>
      <MainSection
        className={"main-section"}
        children={
          <div>
            <MainSectionBody />
          </div>
        }></MainSection>
      <MainSection></MainSection>
      <Section></Section>
      <div>
        <Section2>
          <Box isFlexRow={true}>
            <NuevoIcono />
          </Box>
          <Texto size={"title-lg-bold"} />
        </Section2>
      </div>
    </div>
  );
};

export default Home;
