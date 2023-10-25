import "./PrimaryCard.scss";
import Texto from "../Texto/Texto";

/**
 * @param {JSX.Element} icon - Icono .svg de la card
 * @param {String} title - Título principal de la card
 * @param {String} subtitle - Subtítulo coloreado de la card
 * @param {String} color - Variable que se introducirá para modificar el color de las fuentes
 * @param {String} body - Texto del cuerpo de la card
 *
 * @returns Estructura HTML
 */

export const PrimaryCard = ({ icon, title, subtitle, body }) => {
  return (
    <div className="primary-card">
      <div className="primary-card-icon">{icon}</div>
      <div>
        <Texto
          label={title.text}
          color={title.color}
          size={"title-card-bold"}
        />
        <Texto
          label={subtitle.text}
          size={"title-card-bold"}
          color={subtitle.color}
        />
        <div className="primary-card-body">
          <Texto label={body} size={"body"} />
        </div>
      </div>
    </div>
  );
};
