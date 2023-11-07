import { BsThreeDots } from "react-icons/bs";
import Dropdown from "../Dropdown/Dropdown";
import Icono from "../Icono/Icono";
import PancakeSwapIcono from "../Icono/PancakeSwapIcono";
import Puntos from "../Puntos/Puntos";
import BunnySmall from "../../assets/iconos/BunnySmall";
import { IoSettingsSharp } from "react-icons/io5";
import DropdownNetwork from "../../componentes/Dropdown/DropdownNetwork/DropdownNetwork.jsx";
import BnbSmartChain from "../../assets/iconos/BnbSmartChain.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import "./Navbar.scss";
import Button from "../Button/Button";
import Link from "../Link/Link";
import {
  trade,
  earn,
  win,
  game,
  birthday,
  tresPuntos,
  idiomas,
  networkData,
} from "../../data/dropdownItems";
import { useEffect, useState } from "react";
import { SwitchNetwork } from "../Button/utils.jsx";

const Navbar = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(networkData[0]);

  useEffect(() => {
    SwitchNetwork(selectedNetwork.data);
  }, [selectedNetwork]);
  return (
    <nav>
      <div className="navbar div1">
        <div className="pancakeswap-icon">
          <Icono icono={<PancakeSwapIcono />} />
        </div>
        <Dropdown
          label={"Trade"}
          dropdownItems={trade}
          punto={<Puntos className="punto-rosa" />}
        />
        <Dropdown label={"Earn"} dropdownItems={earn} />
        <Dropdown label={"Win"} dropdownItems={win} />
        <Dropdown label={"Game"} dropdownItems={game} />
        <Dropdown
          label={"Birthday"}
          dropdownItems={birthday}
          punto={<Puntos className="punto-verde" />}
          className={"birthday"}
        />
        <Dropdown
          label={<BsThreeDots />}
          dropdownItems={tresPuntos}
          punto={<Puntos className="punto-verde" />}
          className={"three-dots"}
        />
      </div>
      <div className="navbar div2">
        <Dropdown
          label={<TbWorld />}
          dropdownItems={idiomas}
          className={"idiomas"}
          isIdiomas={true}
        />

        <Button
          isSetting={true}
          className="button-setting"
          svg={<Icono className="setting" icono={<IoSettingsSharp />} />}
          onClick={() => console.log("click en el boton setting")}
        />
        <Link
          className={"button-bunny"}
          svg={<BunnySmall />}
          label={"$1.184"}
          href={"www.google.com"}
        />

        <DropdownNetwork
          icono1={selectedNetwork.iconoinicio}
          label={selectedNetwork.label}
          dropdownItems={networkData}
          className={"bnb"}
          icono2={<IoIosArrowDown />}
          isNetwork={true}
          selectedNetwork={selectedNetwork}
          setSelectedNetwork={setSelectedNetwork}
        />

        <Button
          isPrimary={true}
          widthValue={"149px"}
          heightValue={"32px"}
          texto={"Connect Wallet"}
          colorTexto={"var(--text-color-black)"}
          onClick={() => console.log("click en el boton primario")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
