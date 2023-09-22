import "./PrimaryCard.scss";
import Texto from "../Texto/Texto.js";

/**
 * @param {object} icon - Icono .svg de la card
 * @param {object} title - Título principal de la card
 * @param {object} subtitle - Subtítulo coloreado de la card
 * @param {object} subtitleColor - Variable que se introducirá para modificar el color de subtitle
 * @param {object} body - Texto del cuerpo de la card
 *
 * @returns Estructura HTML
 */

export const PrimaryCard = ({ icon, title, subtitle, subtitleColor, body }) => {
  return (
    <div className="primary-card">
      <div className="primary-card-icon">{icon}</div>
      <div>
        <h2 className="primary-card-title">{title}</h2>
        <Texto
          label={subtitle}
          size={"primary-card-subtitle"}
          color={subtitleColor}
        />
      </div>
      <span className="primary-card-body">{body}</span>
    </div>
  );
};
