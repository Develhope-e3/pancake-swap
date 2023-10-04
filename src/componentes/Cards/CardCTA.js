import "./CardCTA.scss";
import "../Cards/PrimaryCard.scss";
import Texto from "../Texto/Texto.js";
import Button from "../Button/Button";
import Icono from "../Icono/Icono";

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
  title,
  subtitle,
  body,
  onClick,
  button,
}) => {
  return (
    /**
     * TODO modificar container y agregarlo a secciones
     */
    <div className="flex-row-container">
      <div className={style}>
        <Icono icono={icon} className={"cta-card-icon"} />
        <div>
          <Texto
            label={prelude.text}
            size={"title-md-bold"}
            color={prelude.color}
          />
          <Texto label={title.text} size={"title-card"} color={title.color} />
          <Texto
            label={subtitle.text}
            size={"title-md-bold"}
            color={subtitle.color}
          />
        </div>
        <Texto label={body.text} size={"body"} color={body.color} />
        <div className="cta-card-button">
          <Button
            isPrimary={true}
            widthValue={"166px"}
            heightValue={"48px"}
            texto={
              <Texto
                label={button.text}
                size={"title-md-bold"}
                color={button.color}
              />
            }
            svg={<Icono icono={button.icon} />}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};
