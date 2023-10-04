import React from "react";
import { MainSection, Section } from "../componentes/Section/Section.js";
import { Section2, Box } from "../componentes/Section/Section2/Section2.js";
import { GridComposer1 } from "../componentes/GridComposer/GridComposer";
import MainSectionBody from "../componentes/MainSectionBody/MainSectionBody.jsx";

const Home = () => {
  return (
    <div>
      <MainSection>
        <MainSectionBody/>
      </MainSection>
      <br />
      <MainSection>
        <Section2>
          <Box isFlexRow={true}>
            <GridComposer1
              className={"theme1"}
              col={3}
              remRowSpacing={2}
              remColSpacing={9}
            />
          </Box>
        </Section2>
      </MainSection>
    </div>
  );
};

export default Home;
