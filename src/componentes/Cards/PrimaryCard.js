import "./PrimaryCard.scss";

/**
 * @param {Boolean} esPrimaryCard - Boolean para indicar si es card primary-card, secondary-card
 * @param {object} icon - Icono .svg de la card
 * @param {object} title - Título principal de la card
 * @param {object} subtitle - Subtítulo coloreado de la card
 * @param {object} body - Texto del cuerpo de la card
 *
 * @returns Estructura HTML
 */

export const PrimaryCard = ({ esPrimaryCard, icon, title, subtitle, body }) => {

  const selectClass = esPrimaryCard ? "primary-card" : "secondary-card";

  return (
    <div className={selectClass}>
      <div className="primary-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        <h2>{subtitle}</h2>
      </div>
      <span className="primary-body">{body}</span>
      <button className="secondary-button"></button>
    </div>
  );
};
