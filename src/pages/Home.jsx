import "../styles/variables.scss";
import { MainSection, Section } from "../componentes/Section/Section";
import { Box } from "../componentes/Section/Section2/Box";
import { PrimaryCard } from "../componentes/Cards/PrimaryCard";
import { dataPrimaryCard } from "../data/dataPrimaryCard";
import BasePage from "../componentes/Section/BasePage";
import Texto from "../componentes/Texto/Texto";
import Button from "../componentes/Button/Button";
import ImageMainSection from "../assets/iconos/MainSection";
import "./Home.scss";
import { SectionThree } from "../componentes/SectionThree/SectionThree";
import { SectionFour } from "../componentes/SectionFour/SectionFour";
import { SectionSix } from "../componentes/SectionSix/SectionSix";
import { useTheme } from "../context/ThemeContext";
import {
  GridComposer1,
  GridComposer2,
} from "../componentes/GridComposer/GridComposer";
import { CardCTA } from "../componentes/Cards/CardCTA";
import { dataCardCTA } from "../data/dataCardCTA";
import { ButtonScroll } from "../componentes/Button/ButtonScroll";
import { SlideBunny } from "../componentes/Slide-Bunny/SlideBunny";
import SubImages from "../../src/assets/iconos/SubImages";
import SupImages from "../../src/assets/iconos/SupImages";
import { VioletBunny } from "../assets/iconos/VioletBunny";
import MainSectionSVG from "../assets/BackgroundSVG/MainSectionSVG";
import SecondarySectionSVG from "../assets/BackgroundSVG/SecondarySectionSVG";
import TertiarySectionSVG from "../assets/BackgroundSVG/TertiarySectionSVG";

const Home = () => {
  const { theme } = useTheme();
  return (
    <BasePage className={theme === "dark" ? "dark-mode" : "light-mode"}>
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
                isPrimary={true}
                widthValue={"166px"}
                heightValue={"46px"}
                texto={"Connect Wallet"}
                colorTexto={"var(--text-color-black)"}
                onClick={() => console.log("click")}
              />
              <Button
                isSecondary={true}
                texto={"Trade Now"}
                colorTexto={"var(--color-primary)"}
                onClick={() => console.log("click")}
              />
            </Box>
          </Box>
          <ImageMainSection />
        </Box>
        <MainSectionSVG />
      </MainSection>
      <MainSection>
        <Box isFlexColCenter isPaddingTopButton>
          <VioletBunny color={"var(--color-tertiary)"} />
          <Texto
            size={"tittle-section-lg"}
            color={"var(--color-text)"}
            label={`Used by millions. 
            Trusted with billions.`}
          />
          <Texto
            size={"text-section-ml"}
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
        <TertiarySectionSVG />
      </MainSection>

      <Section gradient={"var(--color-black)"}>
        <SectionThree />
      </Section>

      <MainSection background={`var(--background-color-secondary)`}>
        <SecondarySectionSVG />
        <SectionFour />
        <Box isFlexColCenter>
          <GridComposer2 className={"theme2"} col={5} remColSpacing={3} />
        </Box>
      </MainSection>
      <Section gradient={"var(--colors-gradientBlue)"}>
        <SupImages size={35} />
        <Box isFlexRowCenter isItemCard>
          <Box isFlexRowCenter>
            <Texto
              size={"tittle-section-lg"}
              color={"var(--color-text)"}
              colorizedLabelStart={"Win"}
              label={"millions in prizes"}
            />
          </Box>
          <Box isFlexColCenter>
            <Texto
              size={"text-section-ml"}
              color={"var(--color-subtitulo-lila)"}
              label={`Provably fair, on-chain games.
              Win big with PancakeSwap.`}
            />
          </Box>
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
        <SubImages size={35} />
      </Section>
      <MainSection>
        <SectionSix />
        <GridComposer1
          className={"theme1"}
          col={3}
          remRowSpacing={2}
          remColSpacing={9}
        />
      </MainSection>
      <SlideBunny />
      <ButtonScroll />
    </BasePage>
  );
};

export default Home;
