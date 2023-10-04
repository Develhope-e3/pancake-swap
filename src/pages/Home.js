import React from "react";
import { MainSection } from "../componentes/Section/Section.js";
import {
  Section2,
  Box,
  Item,
} from "../componentes/Section/Section2/Section2.js";
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
          <Box isFlexColCenter={true}>
            <Item isSpaceBetween={true} isItemCard={true} >
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
            </Item>
          </Box>
        </Section2>
      </MainSection>
    </div>
  );
};

export default Home;
