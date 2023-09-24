/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Texto.scss";

/**
 *
 * @param {string} size - Tamaño para renderizar el tipo de texto
 * @param {string} color - Variable color, identica a las variables en styles/variables.scss
 * @param {string} label - Texto
 *
 * @returns Elemento HTML para el texto
 */
const Texto = ({ size, color, label }) => {
  return (
    <>
      {size === "title-lg-bold" && (
        <h1 className="title-lg-bold" style={{ color: `var(${color})` }}>
          {label}
        </h1>
      )}
      {size === "title-lg" && (
        <h1 className="title-lg" style={{ color: `var(${color})` }}>
          {label}
        </h1>
      )}
      {size === "title-md-bold" && (
        <h2 className="title-md-bold" style={{ color: `var(${color})` }}>
          {label}
        </h2>
      )}
      {size === "title-md" && (
        <h2 className="title-md" style={{ color: `var(${color})` }}>
          {label}
        </h2>
      )}
      {size === "title-s-bold" && (
        <h3 className="title-s-bold" style={{ color: `var(${color})` }}>
          {label}
        </h3>
      )}
      {size === "title-s" && (
        <h3 className="title-s" style={{ color: `var(${color})` }}>
          {label}
        </h3>
      )}
      {size === "title-xs-bold" && (
        <h4 className="title-xs-bold" style={{ color: `var(${color})` }}>
          {label}
        </h4>
      )}
      {size === "title-xs" && (
        <h4 className="title-xs" style={{ color: `var(${color})` }}>
          {label}
        </h4>
      )}
      {size === "body" && (
        <span className="body" style={{ color: `var(${color})` }}>
          {label}
        </span>
      )}
      {size === "title-link-bold" && (
        <a className="title-link-bold" style={{ color: `var(${color})` }}>
          {label}
        </a>
      )}
      {size === "title-link" && (
        <a className="title-link" style={{ color: `var(${color})` }}>
          {label}
        </a>
      )}
      {size === "title-card-bold" && (
        <h2 className="title-card-bold" style={{ color: `var(${color})` }}>
          {label}
        </h2>
      )}
      {size === "title-card" && (
        <h2 className="title-card" style={{ color: `var(${color})` }}>
          {label}
        </h2>
      )}
    </>
  );
};

export default Texto;
