import React from "react";
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
      {size === "title-large-bold" && (
        <h1 className="title-lg-bold" style={{ color: `var(${color})` }}>
          {label}
        </h1>
      )}
      {size === "title-large" && (
        <h1 className="title-lg" style={{ color: `var(${color})` }}>
          {label}
        </h1>
      )}
      {size === "title-medium-bold" && (
        <h2 className="title-md-bold" style={{ color: `var(${color})` }}>
          {label}
        </h2>
      )}
      {size === "title-medium" && (
        <h2 className="title-md" style={{ color: `var(${color})` }}>
          {label}
        </h2>
      )}
      {size === "title-small-bold" && (
        <h3 className="title-s-bold" style={{ color: `var(${color})` }}>
          {label}
        </h3>
      )}
      {size === "title-small" && (
        <h3 className="title-s" style={{ color: `var(${color})` }}>
          {label}
        </h3>
      )}
      {size === "title-extra-small-bold" && (
        <h4 className="title-xs-bold" style={{ color: `var(${color})` }}>
          {label}
        </h4>
      )}
      {size === "title-extra-small" && (
        <h4 className="title-xs" style={{ color: `var(${color})` }}>
          {label}
        </h4>
      )}
      {size === "body" && (
        <p className="body" style={{ color: `var(${color})` }}>
          {label}
        </p>
      )}
      {size === "primary-card-subtitle" && (
        <h2
          className="primary-card-subtitle"
          style={{
            color: `var(${color})`,
            display: "flex",
            justifyContent: "flex-start",
            margin: "0px 0px 24px",
            fontSize: "var(--font-size-lg)",
          }}
        >
          {label}
        </h2>
      )}
    </>
  );
};

export default Texto;
