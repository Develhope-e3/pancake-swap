import React from "react";
import "../styles/variables.scss";
import { MainSection } from "../componentes/Section/Section.js";
import { Box } from "../componentes/Section/Section2/Box.js";
import { PrimaryCard } from "../componentes/Cards/PrimaryCard.js";
import { dataPrimaryCard } from "../data/dataPrimaryCard.js";
import BasePage from "../componentes/Section/BasePage";
import Texto from "../componentes/Texto/Texto";
import Button from "../componentes/Button/Button";
import ImageMainSection from "../assets/iconos/MainSection";
import "./Home.scss";
import { SectionThree } from "../componentes/SectionThree/SectionThree";
import { SectionFour } from "../componentes/SectionFour/SectionFour";
import { SectionSix } from "../componentes/SectionSix/SectionSix";
import Footer from "../componentes/Footer/Footer";
import { WarningHeader } from "../componentes/WarningHeader/WarningHeader";
import Navbar from "../componentes/Navbar/Navbar";
import { ButtonScroll } from "../componentes/Button/ButtonScroll";
import { SlideBunny } from "../componentes/Slide-Bunny/SlideBunny";
import { VioletBunny } from "../assets/iconos/VioletBunny";
import { GridComposer1 } from "../componentes/GridComposer/GridComposer.js";
import { dataCardCTA } from "../data/dataCardCTA";
import { CardCTA } from "../componentes/Cards/CardCTA";

const Home = () => {
  return (
    <BasePage>
      <SlideBunny />
      <ButtonScroll />
      <WarningHeader />
      <Navbar />
      <MainSection>
        <Box isFlexRow={true} maxWidth={1200}>
          <Box isFlexColStart>
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
            <Box isFlexRowStart>
              <Button
                isL
                texto={"Connect Wallet"}
                colorTexto={"var(--color-button-primary)"}
                onClick={() => console.log("click")}
              />
              <Button
                isM
                isSecondary
                texto={"Trade Now"}
                colorTexto={"var(--color-primary)"}
                onClick={() => console.log("click")}
              />
            </Box>
          </Box>
          <ImageMainSection />
        </Box>
      </MainSection>
      <MainSection>
        <Box isFlexColCenter>
          <VioletBunny color={"var(--color-tertiary)"} />
          <Texto
            size={"title-section-lg-bold"}
            color={"var(--color-text)"}
            label={`Used by millions. 
            Trusted with billions.`}
          />
          <Texto
            size={"title-section-ml"}
            color={"var(--color-subtitulo-lila)"}
            label={`PancakeSwap has the most users of any decentralized platform, ever.
              And those users are now entrusting the platform with over $13 billion in funds.`}
          />
          <Texto
            size={"title-ml-bold"}
            color={"var(--color-subtitulo-lila)"}
            label={"Will you join them?"}
          />
          <Box isFlexRowCenter>
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
        </Box>
      </MainSection>
      <MainSection>
        <SectionThree />
      </MainSection>
      <MainSection>
        <SectionFour />
      </MainSection>
      <MainSection isCardSection>
        <Box isFlexColCenter isItemCard>
          <Texto
            size={"title-section-lg-bold"}
            colorizedLabelStart={"Win"}
            label={"millions in prizes"}
            color={"var(--color-text)"}
          />
          <Texto
            size={"title-section-ml"}
            color={"var(--color-subtitulo-lila)"}
            label={`Provably fair, on-chain games.
            Win big with PancakeSwap.`}
          />
          <Box isFlexRowCenter>
            {dataCardCTA &&
              dataCardCTA.map((card, index) => {
                return (
                  <CardCTA
                    style={card.style}
                    icon={card.icon}
                    prelude={card.prelude}
                    title={card.title}
                    subtitle={card.subtitle}
                    body={card.body}
                    button={card.button}
                    onClick={card.onClick}
                    key={index}
                  />
                );
              })}
          </Box>
        </Box>
      </MainSection>
      <MainSection>
        <SectionSix />
        <Box isFlexRowCenter>
          <GridComposer1
            className={"theme1"}
            col={3}
            remRowSpacing={2}
            remColSpacing={9}
          />
        </Box>
      </MainSection>
      <Footer />
    </BasePage>
  );
};

export default Home;
