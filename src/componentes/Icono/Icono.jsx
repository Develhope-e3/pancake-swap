import "./Icono.scss";

/**
 *
 * @param {string} esRedSocial - Propiedad para saber si el icono es red social o no
 * @param {JSX.Element} icono - Icono de la libreria react-icons (https://react-icons.github.io/react-icons)
 *
 * @returns Estructura HTML
 */

const Icono = ({ icono, color }) => {
  return <div>{icono}</div>;
};

export default Icono;
