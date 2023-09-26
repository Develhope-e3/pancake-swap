import "./CardCTA.scss";
import Texto from "../Texto/Texto.js";
import Button from "../Button/Button";

/**
 * @param {JSX.Element} icon - Icono .svg de la card
 * @param {String} title - Título principal de la card
 * @param {String} subtitle - Subtítulo coloreado de la card
 * @param {String} color - Variable que se introducirá para modificar el color de las fuentes
 * @param {String} body - Texto del cuerpo de la card
 *
 * @returns Estructura HTML
 */

/**
 * TODO crear data para conectar los datos del texto de los botones al componente <Button/>
 */

export const CardCTA = (icon, title, subtitle, subtitleColor, body) => {
  return (
    <div className="cta-card">
      <div className="cta-card-icon">{icon}</div>
      <div className="cta-card-texto">
        <h2 className="cta-card-title">{title}</h2>
        <Texto label={subtitle} size={"title-md"} color={subtitleColor} />
      </div>
      <Texto label={body} size={"body"} />
      <Button
        disable={false}
        esPrimario={"primario"}
        texto={"Play"}
        svg={
          <svg
            viewBox="0 0 24 24"
            ml="4px"
            color="invertedContrast"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-bcPKhP ysQgM">
            <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
          </svg>
        }
        onClick={""}
      />
    </div>
  );
};
