import "./Icono.scss";

/**
 *
 * @param {string} esRedSocial - Propiedad para saber si el icono es red social o no
 * @param {JSX.Element} icono - Icono de la libreria react-icons (https://react-icons.github.io/react-icons)
 *
 * @returns Estructura HTML
 */

const Icono = ({ icono }) => {
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a>{icono}</a>;
};

export default Icono;
