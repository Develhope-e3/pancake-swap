import "./PrimaryCard.scss";
import Texto from "../Texto/Texto.js";

/**
 * @param {object} icon - Icono .svg de la card
 * @param {object} title - Título principal de la card
 * @param {object} subtitle - Subtítulo coloreado de la card
 * @param {object} color - Variable que se introducirá para modificar el color de las fuentes
 * @param {object} body - Texto del cuerpo de la card
 *
 * @returns Estructura HTML
 */

export const PrimaryCard = ({ icon, title, subtitle, color, body }) => {
  return (
    <div className="primary-card">
      <div className="primary-card-icon">{icon}</div>
      <div>
        <Texto label={title} size={"title-card"} />
        <Texto label={subtitle} size={"title-card"} color={color} />
        <div className="primary-card-body">
          <Texto label={body} size={"body"} />
        </div>
      </div>
    </div>
  );
};
