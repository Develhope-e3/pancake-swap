import "./PrimaryCard.scss";

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

   /* {cardData &&
        cardData.map((card) => (
          <div className="card">
            <Texto label={card.titulo} size={"title-large-bold"} color={card.color} />
            <Texto label={card.subitulo} size={"title-large-bold"} color={card.color} />
            <Texto label={card.body} size={"title-large-bold"} color={card.color} />
          </div>
      ))} */

   /* const Texto = ({ size, color, label }) => {
        return (
          <>
            {size === "primary-card-subtitle" && (
            <h2 className="primary-card-subtitle" style={{ color: `var(${color});` display: "flex;" justify-content: "flex-start;" margin: "0px 0px 24px;" font-size: "var(--font-size-lg);" }}>
            {label}
            </h2>
            )} 
          </> */

   /* .primary-card-subtitle {
          display: flex;
          justify-content: flex-start;

          margin: 0px 0px 24px;

          font-size: var(--font-size-lg);
        } */
  );
};
