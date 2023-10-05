import React from "react";
import "./Section.scss";
import classNames from "classnames";

/**
 *
 * @param {Components} children - Componentes hijos
 * @param {String} isCardSection - Color del background de la sección correspondiente a las card
 *
 * @returns Estructura HTML
 */

export const MainSection = ({ children, isCardSection }) => {
  const sectionClassName = classNames({
    main: true,
    "card-section": isCardSection,
  })

  return <div className={sectionClassName}>{children}</div>;
};
