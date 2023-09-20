import "./LinkComponente.scss";

/**
 * @param {string} label - Texto que va a llevar el link
 * @param {string} className - clase del link (primaryAnchor, secondaryAnchor, tertiaryAnchor)
 * @param {string} href - URL del link
 * @param {object} svg - imagen SVG del link
 * @param {string} color - variable del color del link
 *
 * @returns Estructura HTML
 */

const LinkComponente = ({ label, className, href, svg, color }) => {
  return (
    <a class={className} style={color var({color})} href={href}>
      {label} {svg && svg}
    </a>
  );
};

export default LinkComponente;
