import React from "react";
import "./Section.scss";

/**
 * @param {string} className - clase del link (primaryAnchor, secondaryAnchor, tertiaryAnchor)
 * @param {svgImage} headSVG - SVG que llevará la sección arriba del todo
 * @param {svgImage} footSVG - SVG que llevará la sección abajo del todo
 * @param {HTML object} headSection - contenido del Head de la sección
 * @param {HTML object} bodySection - contenido principal de la sección
 *
 * @returns Estructura HTML
 */

const Section = ({ children }) => {
  return <div className={"main-section"}>{children}</div>;
};

export default Section;
