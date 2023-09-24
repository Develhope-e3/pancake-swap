import "./CardCTA.scss";
import Texto from "../Texto/Texto.js";

{/* @TODO Crear card con los apartados correspondientes a las card CTA */}
export const CardCTA = () => {
  return (
    <div className="cta-card">
      <div className="cta-card-icon">{icon}</div>
      <div className="cta-card-texto">
        <h2 className="cta-card-title">{title}</h2>
        <Texto label={subtitle} size={"title-md"} color={subtitleColor} />
      </div>
      <Texto label={body} size={"body"} />
    </div>
  );
}

