import "./PrimaryCard.scss";

/**
 * @param {object} icon - Icono .svg de la card
 * @param {object} title - Título principal de la card
 * @param {object} subtitle - Subtítulo coloreado de la card
 * @param {prop} color - Variable que se introducirá para modificar el color de subtitle
 * @param {object} body - Texto del cuerpo de la card
 *
 * @returns Estructura HTML
 */

export const PrimaryCard = ({ icon, title, subtitle, color, body }) => {
  return (
    <div className="primary-card">
      <div className="primary-icon">{icon}</div>
      <div>
        <h2 className="primary-title">{title}</h2>
        <h2 className="primary-subtitle">{subtitle}</h2>
      </div>
      <span className="primary-body">{body}</span>
    </div>
  );
};
