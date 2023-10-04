import React from "react";
import "../styles/variables.scss"
import { MainSection } from "../componentes/Section/Section.js";
import { Section2, Box } from "../componentes/Section/Section2/Section2.js";
import MainSectionBody from "../componentes/MainSectionBody/MainSectionBody.jsx";
import { PrimaryCard } from "../componentes/Cards/PrimaryCard.js";
import { dataPrimaryCard } from "../data/dataPrimaryCard.js";

const Home = () => {
  return (
    <div>
      <MainSection>
        <MainSectionBody />
      </MainSection>
      <br />
      <MainSection>
        <Section2>
          <Box isFlexColSpaceBetween={true}>
            {dataPrimaryCard &&
              dataPrimaryCard.map((card, index) => {
                return (
                  <PrimaryCard
                    icon={card.icon}
                    title={card.title}
                    subtitle={card.subtitle}
                    body={card.body}
                    key={index}
                  />
                );
              })}
          </Box>
        </Section2>
      </MainSection>
    </div>
  );
};

export default Home;
