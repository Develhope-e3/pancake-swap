import "./Navbar.scss";
import Trade from "../../assets/iconos/Trade";
import Link from "../Link/Link";
import Earn from "../../assets/iconos/Earn";
import Game from "../../assets/iconos/Game";
import NFT from "../../assets/iconos/NFT";
import ThreeDots from "../../assets/iconos/ThreeDots";

const Navbar2 = () => {
  return (
    <nav className="navbar2-container">
      <div className="navbar2">
        <Link className="link-navbar2" label={"Trade"} svg={<Trade />} />
      </div>
      <div className="navbar2">
        <Link className="link-navbar2" label={"Earn"} svg={<Earn />} />
      </div>
      <div className="navbar2">
        <Link className="link-navbar2" label={"Game"} svg={<Game />} />
      </div>
      <div className="navbar2">
        <Link className="link-navbar2" label={"NFT"} svg={<NFT />} />
      </div>
      <div className="navbar2">
        <Link className="link-navbar2"  svg={<ThreeDots />} />
      </div>
    </nav>
  );
};

export default Navbar2;
