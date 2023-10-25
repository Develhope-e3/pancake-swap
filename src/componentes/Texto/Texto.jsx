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
        <h1 className="title-lg-bold" style={{ color: `${color}` }}>
          {label}
        </h1>
      )}
      {size === "title-lg" && (
        <h1 className="title-lg" style={{ color: `${color}` }}>
          {label}
        </h1>
      )}
      {size === "title-md-bold" && (
        <h2 className="title-md-bold" style={{ color: `${color}` }}>
          {label}
        </h2>
      )}
      {size === "title-md" && (
        <h2 className="title-md" style={{ color: `${color}` }}>
          {label}
        </h2>
      )}
      {size === "title-ml-bold" && (
        <h2 className="title-ml-bold" style={{ color: `${color}` }}>
          {label}
        </h2>
      )}
      {size === "title-ml" && (
        <h2 className="title-ml" style={{ color: `${color}` }}>
          {label}
        </h2>
      )}
      {size === "title-s-bold" && (
        <h3 className="title-s-bold" style={{ color: `${color}` }}>
          {label}
        </h3>
      )}
      {size === "title-s" && (
        <h3 className="title-s" style={{ color: `${color}` }}>
          {label}
        </h3>
      )}
      {size === "title-xs-bold" && (
        <h4 className="title-xs-bold" style={{ color: `${color}` }}>
          {label}
        </h4>
      )}
      {size === "title-xs" && (
        <h4 className="title-xs" style={{ color: `${color}` }}>
          {label}
        </h4>
      )}
      {size === "body" && (
        <span className="body" style={{ color: `${color}` }}>
          {label}
        </span>
      )}
      {size === "title-link-bold" && (
        <a className="title-link-bold" style={{ color: `${color}` }}>
          {label}
        </a>
      )}
      {size === "title-link" && (
        <a className="title-link" style={{ color: `${color}` }}>
          {label}
        </a>
      )}
      {size === "title-card-bold" && (
        <h2 className="title-card-bold" style={{ color: `${color}` }}>
          {label}
        </h2>
      )}
      {size === "title-card" && (
        <h2 className="title-card" style={{ color: `${color}` }}>
          {label}
        </h2>
      )}
      {size === "body-warningv1" && (
        <span className="body-warningv1" style={{ color: `${color}` }}>
          {label}
        </span>
      )}
      {size === "body-warningv2" && (
        <span className="body-warningv2" style={{ color: `${color}` }}>
          {label}
        </span>
      )}
      {size === "text-button" && (
        <span className="text-button" style={{ color: `${color}` }}>
          {label}
        </span>
      )}
      {size === "tittle-section-lg" && (
        <span className="tittle-section-lg" style={{ color: `${color}` }}>
          {label}
        </span>
      )}
      {size === "text-section-ml" && (
        <span className="text-section-ml" style={{ color: `${color}` }}>
          {label}
        </span>
      )}

    </>
  );
};

export default Texto;
