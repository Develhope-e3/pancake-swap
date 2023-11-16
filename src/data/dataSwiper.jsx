import base1 from "../assets/imagenes/asset 41.png";
import base2 from "../assets/imagenes/asset 36.png";
import base3 from "../assets/imagenes/asset 17.png";
import base4 from "../assets/imagenes/asset 54.png";
import conejo1 from "../assets/imagenes/asset 45.png";
import conejo2 from "../assets/imagenes/asset 38.png";
import conejo3 from "../assets/imagenes/asset 34.png";
import conejo4 from "../assets/imagenes/asset 59.png";
import Texto from "../componentes/Texto/Texto";
import Button from "../componentes/Button/Button";
import LinkLearn from "../assets/iconos/LinkLearn";

export const dataSwiper = [
  {
    className: "slide1",
    textoPrimario: (
      <div>
        <h3 style={{ color: "var(--color-quaternary)", fontSize: "30px" }}>
          Traverse the Treasure Islands on Galxe now!
        </h3>
      </div>
    ),
    textoSecundario: (
      <div>
        <h3 style={{ color: "var(--color-quaternary)", fontSize: "30px" }}>
          subtitulo
        </h3>
      </div>
    ),
    descripcion: null,
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
        onClick={() => console.log("boton conejo volador")}
      />
    ),
    botonSecundario: null,
    conejo: conejo1,
    numeroDeSlide: 1,
    backgroundImage: base1,
  },
  {
    className: "slide2",
    textoPrimario: "Titulo de la card 2",
    textoSecundario: "subtitulo de la card 2",
    descripcion: null,
    link: "Get Rekt",
    botonPrimario: null,
    botonSecundario: null,
    conejo: conejo2,
    numeroDeSlide: 2,
    backgroundImage: base2,
  },
  {
    className: "slide3",
    textoPrimario: "Titulo de la card 3",
    textoSecundario: "subtitulo de la card 3",
    descripcion: null,
    link: "Get Rekt",
    botonPrimario: null,
    botonSecundario: null,
    conejo: conejo3,
    numeroDeSlide: 3,
    backgroundImage: base3,
  },
  {
    className: "slide4",
    textoPrimario: "Titulo de la card 4",
    textoSecundario: "subtitulo de la card 4",
    descripcion: null,
    link: "Get Rekt",
    botonPrimario: null,
    botonSecundario: null,
    conejo: conejo4,
    numeroDeSlide: 4,
    backgroundImage: base4,
  },
];
