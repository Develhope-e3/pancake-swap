import "./Link.scss";
import classNames from "classnames";

/**
 * @param {string} label - Texto que va a llevar el link
 * @param {string} className - clase del link (primaryAnchor, secondaryAnchor, tertiaryAnchor)
 * @param {string} href - URL del link
 * @param {svgImage} svg - imagen SVG del link
 *
 * @returns Estructura HTML
 */

const Link = ({ label, className, href, svg, id, isTarget }) => {
  const targets = classNames({
    "_blank": isTarget,
  });

  return (
    <a id={id} className={className} href={href} target={targets} rel="nofollow">
      {label} {svg && svg}
    </a>
  );
};

export default Link;
