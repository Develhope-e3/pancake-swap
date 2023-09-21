import "./LinkComponente.scss";

/**
 * @param {string} label - Texto que va a llevar el link
 * @param {string} className - clase del link (primaryAnchor, secondaryAnchor, tertiaryAnchor)
 * @param {string} href - URL del link
 * @param {object} svg - imagen SVG del link
 *
 * @returns Estructura HTML
 */

const Link = ({ label, className, href, svg, }) => {
  return (
    <a class={className} href={href}>
      {label} {svg && svg}
    </a>
  );
};

export default Link;
