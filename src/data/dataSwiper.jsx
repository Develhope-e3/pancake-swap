import base1 from "../assets/imagenes/asset 41.png";
import base3 from "../assets/imagenes/asset 36.png";
import base2 from "../assets/imagenes/asset 17.png";
import base4 from "../assets/imagenes/asset 54.png";
import base5 from "../assets/imagenes/base5.png";
import conejo1 from "../assets/imagenes/asset 45.png";
import conejo3 from "../assets/imagenes/asset 38.png";
import conejo2 from "../assets/imagenes/asset 151.png";
import conejo4 from "../assets/imagenes/asset 47.png";
import conejo5 from "../assets/imagenes/asset 69.png";
import Texto from "../componentes/Texto/Texto";
import Button from "../componentes/Button/Button";
import LinkLearn from "../assets/iconos/LinkLearn";
import texto2Png1 from "../assets/imagenes/asset 40.png";
import textoPancake from "../assets/imagenes/asset 9.png";
import texto2Png2 from "../assets/imagenes/asset 3.png";
import Link from "../componentes/Link/Link";
import pngBNB from "../assets/imagenes/asset 1.png";
import ArrowRight from "../assets/iconos/ArrowRight";

export const dataSwiper = [
  {
    className: "slide1",
    texto1EnPng: textoPancake,
    texto2EnPng: texto2Png1,
    textoPrimario: (
      <h3
        style={{
          color: "var(--color-quaternary)",
          fontSize: "30px",
          webkitTextFillColor: "var(--color-quaternary)",
          webkitTextStroke: "2px var(--color-borde-text-swiper)",
        }}
      >
        Traverse the Treasure Islands on Galxe now!
      </h3>
    ),
    textoSecundario: (
      <h4
        style={{
          color: "var(--color-card-text)",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        Exclusive NFTs and treasures await!
      </h4>
    ),
    link: null,
    botonPrimario: (
      <Button
        isPrimary={true}
        widthValue={"158.6px"}
        heightValue={"48px"}
        gap={"2px"}
        texto={
          <Texto
            label={"Get Started"}
            size={"title-md-bold"}
            color={"var(--text-color)"}
          />
        }
        svg={<LinkLearn color={"var(--text-color)"} />}
        onClick={() => console.log("boton")}
      />
    ),
    botonSecundario: null,
    conejo: conejo1,
    numeroDeSlide: 1,
    backgroundImage: base1,
  },
  {
    className: "slide2",
    texto1EnPng: textoPancake,
    texto2EnPng: pngBNB,
    textoPrimario: (
      <h3
        style={{
          color: "var(--color-quaternary)",
          fontSize: "30px",
        }}
      >
        PancakeSwap Now Live on opBNB!
      </h3>
    ),
    textoSecundario: (
      <h4
        style={{
          color: "var(--text-color)",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        Swap and Provide Liquidity Nov!
      </h4>
    ),
    link: (
      <Link
        className={"link3"}
        svg={<LinkLearn />}
        label={"Get Started"}
        href={"www.google.com"}
      />
    ),
    botonPrimario: null,
    botonSecundario: null,
    conejo: conejo2,
    numeroDeSlide: 2,
    backgroundImage: base2,
  },
  {
    className: "slide3",
    texto1EnPng: textoPancake,
    texto2EnPng: texto2Png2,
    textoPrimario: (
      <h3
        style={{
          color: "var(--color-quaternary)",
          fontSize: "30px",
          webkitTextFillColor: "var(--color-quaternary)",
          webkitTextStroke: "2px var(--color-borde-text-swiper)",
        }}
      >
        PancakeSwap Now Live on Polygon!
      </h3>
    ),
    textoSecundario: (
      <h4
        style={{
          color: "var(--color-card-text)",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        Swap and Provide Liquidity Now!
      </h4>
    ),
    link: ( <Link
      className={"link3"}
      svg={<LinkLearn />}
      label={"Get Started"}
      href={"www.google.com"}
    />),
    botonPrimario: null,
    botonSecundario: null,
    conejo: conejo3,
    numeroDeSlide: 3,
    backgroundImage: base3,
  },
  {
    className: "slide4",
    texto1EnPng: null,
    texto2EnPng: null,
    textoPrimario: (
      <h3
        style={{
          color: "var(--text-color)",
          fontSize: "25px",
        }}
      >
        Trade to Earn Rewards!
      </h3>
    ),
    textoSecundario: (
      <h4
        style={{
          color: "var(--text-color)",
          fontSize: "40px",
          fontWeight: 700,
        }}
      >
        10% trading rebate to be earned!
      </h4>
    ),
    link: null,
    botonPrimario: (
      <Button
        isPrimary={true}
        widthValue={"140px"}
        heightValue={"48px"}
        gap={"2px"}
        texto={
          <Texto
            label={"Trade Now"}
            size={"title-md-bold"}
            color={"var(--text-color)"}
          />
        }
        svg={<ArrowRight color={"var(--text-color)"} />}
        onClick={() => console.log("boton")}
      />
    ),
    botonSecundario: (
      <Button
        isTertiary={true}
        widthValue={"158.6px"}
        heightValue={"48px"}
        gap={"2px"}
        texto={
          <Texto
            label={"Learn More"}
            size={"text-button"}
            color={"var(--color-primary)"}
          />
        }
        svg={<LinkLearn color={"var(--color-primary)"} />}
        onClick={() => console.log("boton")}
      />
    ),
    conejo: conejo4,
    numeroDeSlide: 4,
    backgroundImage: base4,
  },
  {
    className: "slide5",
    texto1EnPng: null,
    texto2EnPng: null,
    textoPrimario: (
      <h3
        style={{
          webkitTextFillColor: "var(--color-quaternary)",
          webkitTextStroke: "2px var(--color-titulo-footer)",
          fontSize: "24px",
        }}
      >
        Perpetual Futures
      </h3>
    ),
    textoSecundario: (
      <h4
        style={{
          color: "var(--text-color)",
          fontSize: "40px",
          fontWeight: 700,
        }}
      >
        UP TO 100x LAVERAGE!
      </h4>
    ),
    link: null,
    botonPrimario: (
      <Button
        isPrimary={true}
        widthValue={"140px"}
        heightValue={"48px"}
        gap={"2px"}
        texto={
          <Texto
            label={"Trade Now"}
            size={"title-md-bold"}
            color={"var(--text-color)"}
          />
        }
        svg={<ArrowRight color={"var(--text-color)"} />}
        onClick={() => console.log("boton")}
      />
    ),
    botonSecundario: null,
    conejo: conejo5,
    numeroDeSlide: 5,
    backgroundImage: base5,
  },
];
