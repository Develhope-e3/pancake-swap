import { BsThreeDots } from "react-icons/bs";
import Dropdown from "../Dropdown/Dropdown";
import Icono from "../Icono/Icono";
import PancakeSwapIcono from "../../assets/iconos/PancakeSwapIcono.jsx";
import ResponsivePancakeSwapIcono from "../../assets/iconos/ResponsivePancakeSwapIcono.jsx";
import Puntos from "../Puntos/Puntos";
import BunnySmall from "../../assets/iconos/BunnySmall";
import { IoSettingsSharp } from "react-icons/io5";
import DropdownNetwork from "../../componentes/Dropdown/DropdownNetwork/DropdownNetwork.jsx";
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
import { SwitchNetwork, connectWallet } from "../Button/utils.jsx";
import { useModal } from "../Modals/useModal";
import { Modal } from "../Modals/Modal";

const Navbar = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(networkData[0]);

  const [wallet, setWallet] = useState("");

  useEffect(() => {
    if (wallet) {
      SwitchNetwork(selectedNetwork);
    }
  }, [selectedNetwork, wallet]);

  // const {visible, handleOpenModal, handleCloseModal} = useModal(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <nav>
      <div className="navbar div1">
        <div className="pancakeswap-icon">
          <Icono icono={<PancakeSwapIcono />} />
        </div>
        <div>
          <Link
            className={"pancakeswap-icon_responsive"}
            svg={<ResponsivePancakeSwapIcono />}
            href={"/"}
          />
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
        <Link
          className={"button-bunny"}
          svg={<BunnySmall />}
          label={"$1.184"}
          href={"www.google.com"}
        />
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
          id="connect-wallet"
          isPrimary={true}
          widthValue={"149px"}
          heightValue={"32px"}
          texto={"Connect Wallet"}
          colorTexto={"var(--text-color-black)"}
          onClick={() => setIsModalVisible(true)}
        />
        {isModalVisible && (
          <Modal setIsModalVisible={setIsModalVisible}>
            {/* <WalletModalContent /> */}
          </Modal>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
