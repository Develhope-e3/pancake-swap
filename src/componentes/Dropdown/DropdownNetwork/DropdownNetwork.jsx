import "./DropdownNetwork.scss";
import { useState } from "react";
import DropdownItem from "../DropdownItems/DropdownItems";
import Icono from "../../Icono/Icono";
import Link from "../../Link/Link";

/**
 *
 * @param {string} label - Texto que va a llevar el encabezado del Dropdown
 * @param {componente} dropdownItems -Contenido Dropdown
 * @param {string} href - URL del encabezado
 * @param {string} className - Clase del encabezado del Dropdown
 * @param {componente} icono - Icono
 *
 * @returns Estructura HTML
 */

const DropdownNetwork = ({
  dropdownItems,
  label,
  href,
  className,
  selectedNetwork,
  icono1,
  icono2,
  setSelectedNetwork,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
    className="dropdownContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bnb">
        <Icono icono={selectedNetwork.iconoinicio} />
        <Link label={selectedNetwork.label} className={className} href={href} />
        <Icono icono={icono2} />
        {isOpen && (
          <DropdownItem
            options={dropdownItems}
            isNetwork={true}
            setSelectedNetwork={setSelectedNetwork}
          />
        )}
      </div>
    </div>
  );
};
export default DropdownNetwork;
