import "./CardCTA.scss";
import "../Cards/PrimaryCard.scss";
import Texto from "../Texto/Texto.js";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { RxExit } from "react-icons/rx";
import NuevoIcono from "../Icono/NuevoIcono.jsx";

/**
 * @param {JSX.Element} icon - Icono .svg de la card
 * @param {String} title - Título principal de la card
 * @param {String} subtitle - Subtítulo coloreado de la card
 * @param {String} color - Variable que se introducirá para modificar el color de las fuentes
 * @param {String} body - Texto del cuerpo de la card
 *
 * @returns Estructura HTML
 */

export const CardCTA = ({
  style,
  icon,
  prelude,
  preludeColor,
  title,
  titleColor,
  subtitle,
  subtitleColor,
  body,
  button,
}) => {
  return (
    /**
     * TODO modificar container y agregarlo a secciones
     */
    <div className="flex-row-container">
      <div className={style}>
        <div className="cta-card-icon">{icon}</div>
        <Texto label={prelude} size={"title-md-bold"} color={preludeColor} />
        <div>
          <Texto label={title} size={"title-card"} color={titleColor} />
          <Texto label={subtitle} size={"title-md"} color={subtitleColor} />
        </div>
        <Texto label={body} size={"body"} />
        <div className="cta-card-button">
          <ButtonPrimary
            className={"button-primary-card"}
            texto={button}
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
          <NuevoIcono color={"red"} svg={<RxExit />} />
        </div>
      </div>
    </div>
  );
};
