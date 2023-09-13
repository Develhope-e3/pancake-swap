import "./Link.scss";

/**
 *
 * @param {string} label - Texto que va a llevar el link
 * @param {string} href - URL de navegacion para el link
 * @param {string} className - Clase del link
 *
 * @returns Estructura HTML
 */

const Link = ({ href, label, className }) => {
  return (
    <a href={href} className={className} >
      {label}
    </a>
  );
};

/**
 * Siempre va al final del componente, para poder importarlo en mi aplicacion
 */
export default Link;
