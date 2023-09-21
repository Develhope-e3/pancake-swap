import "./PrimaryCard.scss";

/**
 * @param {object} icon - Icono .svg de la card
 * @param {object} title - Título principal de la card
 * @param {object} subtitle - Subtítulo coloreado de la card
 * @param {object} body - Texto del cuerpo de la card
 *
 * @returns Estructura HTML
 */

export const PrimaryCard = ({ icon, title, subtitle, body }) => {
  return (
    <div className="primary-card">
      <div className="primary-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        <h2>{subtitle}</h2>
      </div>
      <span className="primary-body">{body}</span>
    </div>
  );
};
