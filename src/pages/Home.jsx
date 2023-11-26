import "./Home.scss";
import "../styles/variables.scss";
import BasePage from "../componentes/Section/BasePage";
import Texto from "../componentes/Texto/Texto";
import Button from "../componentes/Button/Button";
import Link from "../componentes/Link/Link";
import { MainSection, Section } from "../componentes/Section/Section";
import { Box } from "../componentes/Section/Section2/Box";
import { useTheme } from "../context/ThemeContext";
import { ButtonScroll } from "../componentes/Button/ButtonScroll";
import { SlideBunny } from "../componentes/Slide-Bunny/SlideBunny";
import ImageMainSection from "../assets/iconos/MainSection";
import MainSectionSVG from "../assets/BackgroundSVG/MainSectionSVG";
import { VioletBunny } from "../assets/iconos/VioletBunny";
import { dataPrimaryCard } from "../data/dataPrimaryCard";
import { PrimaryCard } from "../componentes/Cards/PrimaryCard";
import SecondarySectionSVG from "../assets/BackgroundSVG/SecondarySectionSVG";
import SectionthreeCoins from "../assets/imagenes/SectionthreeCoins.png";
import TertiarySectionSVG from "../assets/BackgroundSVG/TertiarySectionSVG";
import {
  GridComposer1,
  GridComposer2,
} from "../componentes/GridComposer/GridComposer";
import SubImages from "../../src/assets/iconos/SubImages";
import SupImages from "../../src/assets/iconos/SupImages";
import { dataCardCTA } from "../data/dataCardCTA";
import { CardCTA } from "../componentes/Cards/CardCTA";
import SectionFourCoins from "../assets/imagenes/SectionFourCoins.png";
import SectionSixCoins from "../assets/imagenes/SectionSixCoins.png";
import { LastSectionSVG } from "../assets/BackgroundSVG/LastSectionSVG";
import SwiperScrollbar from "../componentes/Swiper/SwiperScrollbar";
import { useSpring, animated } from "@react-spring/web";

/**
 * ToDo: Refactorizar tamaño letra footer (16px) y tamaño GridComposer2 (16px letra pequeña y 24px letra de los números)
 */

const Home = () => {
  const { theme } = useTheme();
  const { scale } = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.1, config: { duration: 1000 } }); // Ajusta la duración aquí
        await next({ scale: 1, config: { duration: 1000 } }); // Ajusta la duración aquí
      }
    },
    reset: true,
  });
  const { translateY } = useSpring({
    to: { translateY: 8 }, // Cambia este valor para ajustar la altura de flotación
    from: { translateY: 0 },
    loop: true, // Para que la animación se repita
    config: { tension: 10, friction: 0 }, // cambiar tension para cambiar el efecto de flotar
  });

  return (
    <BasePage className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <Section gradient={"var(--colors-gradientBubblegum)"}>
        <Box isFlexColCenter>
          <Box marginTop={4} isFlexColCenter maxWidth={1168}>
            <SwiperScrollbar />
          </Box>
          <Box isFlexRow maxWidth={1275} zIndex={1}>
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
                  isPrimary
                  widthValue={"166px"}
                  heightValue={"46px"}
                  texto={"Connect Wallet"}
                  colorTexto={"var(--text-color-black)"}
                  onClick={() => console.log("click")}
                />
                <Button
                  isSecondary
                  texto={"Trade Now"}
                  colorTexto={"var(--color-primary)"}
                  onClick={() => console.log("click")}
                />
              </Box>
            </Box>
            <ImageMainSection />
          </Box>
          <Box isRelative>
            <MainSectionSVG />
          </Box>
          <Section gradient={"var(--colors-gradientCake)"} overflow={"visible"}>
            <Box isFlexColCenter gap={2} marginBottom={4}>
              <VioletBunny color={"var(--color-card-text)"} />
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
          </Section>
        </Box>
      </Section>
      <Section gradient={"var(--background-color-card-title)"}>
        <Box isFlexColCenter maxWidth={1168} paddingTop={4} marginBottom={4}>
          <Box isFlexRow>
            <Box isFlexColStart seccionTextOrder>
              <Box isFlexCol>
                <Box seccionText>
                  <Texto
                    size={"tittle-section-lg"}
                    color={"var(--color-titulo-lila)"}
                    label={"Trade "}
                  />
                  <Texto
                    size={"tittle-section-lg"}
                    color={"var(--color-text)"}
                    label={"anything. No registration, no hassle."}
                  />
                </Box>
                <Box seccionText>
                  <Texto
                    size={"text-section-ml"}
                    color={"var(--color-subtitulo-lila)"}
                    label={
                      "Trade any token on BNB Smart Chain in seconds, just by connnecting your wallet"
                    }
                  />
                </Box>
              </Box>
              <Box isFlexRowStart>
                <Button
                  isPrimary
                  widthValue={"166px"}
                  heightValue={"46px"}
                  texto={"Trade Now"}
                  colorTexto={"var(--text-color-black)"}
                  onClick={() => console.log("click en el boton primario")}
                />
                <Link
                  label={"Learn"}
                  className={"primary-anchor"}
                  href={""}
                  svg={
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="anchorSVG">
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                    </svg>
                  }
                />
              </Box>
            </Box>
            <Box seccionImage>
              <animated.img
                src={SectionthreeCoins}
                alt="coins"
                style={{ transform: scale.to((s) => `scale(${s}`) }}
              />
            </Box>
          </Box>
        </Box>
      </Section>
      <MainSection background={`var(--background-color-secondary)`}>
        <SecondarySectionSVG />
        <Box isFlexColCenter maxWidth={1168}>
          <Box isFlexRow>
            <Box seccionImage>
              <animated.img
                src={SectionFourCoins}
                alt="data"
                style={{ translateY }}
              />
            </Box>
            <Box isFlexColStart seccionTextOrder>
              <Box isFlexCol>
                <Box seccionText>
                  <Texto
                    size={"tittle-section-lg"}
                    color={"var(--color-titulo-lila)"}
                    label={"Earn "}
                  />
                  <Texto
                    size={"tittle-section-lg"}
                    color={"var(--color-text)"}
                    label={"passive income with crypto"}
                  />
                </Box>
                <Box seccionText>
                  <Texto
                    size={"text-section-ml"}
                    color={"var(--color-subtitulo-lila)"}
                    label={
                      "PancakeSwap makes it easy to make your crypto work for you"
                    }
                  />
                </Box>
              </Box>
              <Box isFlexRowStart>
                <Button
                  isPrimary
                  widthValue={"166px"}
                  heightValue={"46px"}
                  texto={"Trade Now"}
                  colorTexto={"var(--text-color-black)"}
                  onClick={() => console.log("click en el boton primario")}
                />
                <Link
                  label={"Learn"}
                  className={"primary-anchor"}
                  href={""}
                  svg={
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="anchorSVG">
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                    </svg>
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box isFlexColCenter marginTop={4} marginBottom={4} maxWidth={1168}>
          <GridComposer2 className={"theme2"} col={5} remColSpacing={3} />
        </Box>
      </MainSection>
      <Section gradient={"var(--colors-gradientBlue)"}>
        <SupImages size={35} />
        <Box
          isFlexRowCenter
          isItemCard
          marginTop={4}
          marginBottom={4}
          maxWidth={1168}>
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
      <Section gradient={"var(--background-color-card-title)"}>
        <Box isFlexColCenter maxWidth={1168} marginTop={4} marginBottom={4}>
          <Box isFlexRow>
            <Box isFlexColStart seccionTextOrder>
              <Box isFlexCol>
                <Box seccionText>
                  <Texto
                    size={"tittle-section-lg"}
                    color={"var(--color-titulo-lila)"}
                    label={"CAKE "}
                  />
                  <Texto
                    size={"tittle-section-lg"}
                    color={"var(--color-text)"}
                    label={" make our world go round."}
                  />
                </Box>
                <Box seccionText>
                  <Texto
                    size={"text-section-ml"}
                    color={"var(--color-subtitulo-lila)"}
                    label={
                      "CAKE tokens is at the heart of the PancakeSwap ecosystem. Buy it , win it, farm it, spend it, stake it... heck, you can even vote with it!"
                    }
                  />
                </Box>
              </Box>
              <Box isFlexRowStart>
                <Button
                  isPrimary
                  widthValue={"166px"}
                  heightValue={"46px"}
                  texto={"Trade Now"}
                  colorTexto={"var(--text-color-black)"}
                  onClick={() => console.log("click en el boton primario")}
                />
                <Link
                  label={"Learn"}
                  className={"primary-anchor"}
                  href={""}
                  svg={
                    <svg
                      viewBox="0 0 24 24"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="anchorSVG">
                      <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                    </svg>
                  }
                />
              </Box>
            </Box>
            <Box seccionImage>
              <animated.img
                src={SectionSixCoins}
                alt="coins"
                style={{ translateY }}
              />
            </Box>
          </Box>
          <Box marginBottom={4} marginTop={4}>
            <Box isFlexColCenter>
              <GridComposer1
                className={"theme1"}
                col={3}
                remRowSpacing={2}
                remColSpacing={9}
              />
            </Box>
          </Box>
        </Box>
      </Section>
      <Section gradient={"var(--colors-gradientLastSection)"}>
        <Box maxWidth={1168}>
          <Box isFlexColCenter>
            <Texto
              size={"title-card-bold"}
              color={"var(--text-color)"}
              label={"Start in seconds"}
            />
          </Box>
          <Box isFlexColCenter gap={1}>
            <Texto
              size={"title-ml"}
              color={"var(--text-color)"}
              label={"Start in seconds"}
            />
            <Texto
              size={"title-ml-bold"}
              color={"var(--text-color)"}
              label={"Start in seconds"}
            />
          </Box>
          <Box gap={2} isFlexColCenter>
            <Link
              label={"Learn how to start"}
              className={"primary-anchor"}
              href={""}
              svg={
                <svg
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="anchorSVG">
                  <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                </svg>
              }
            />
            <Button
              isPrimary
              widthValue={"165.15px"}
              heightValue={"48px"}
              texto={"Connect Wallet"}
              colorTexto={"var(--color-button-primary)"}
            />
          </Box>
          <LastSectionSVG />
        </Box>
      </Section>
      <SlideBunny />
      <ButtonScroll />
    </BasePage>
  );
};

export default Home;
