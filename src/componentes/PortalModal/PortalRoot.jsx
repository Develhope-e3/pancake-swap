import Texto from "../Texto/Texto";
import "./PortalRoot.scss";
import { GridComposer3 } from "../GridComposer/GridComposer";
import { useState } from "react";
import Link from "../Link/Link";
import ArrowRight from "../../assets/iconos/ArrowRight";
import classnames from "classnames";
import { Modal } from "../Modals/Modal";
import { PortalSwiper } from "./PortalSwiper";
/* import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"; */

/**
 *
 * @param {*} param0 Explanation...
 * @param {*} param1 Explanation...
 * @param {*} param2 Explanation...
 *
 * @returns Estructura HTML
 */

export const PortalRoot = ({ connectWallet }) => {
  const [isWindowVisible, setIsWindowVisible] = useState(null);

  const classNames = classnames({
    "ventana-primaria": true,
  });

  return (
    <>
      <div className="container-buttons">
        <button
          className={"button-left"}
          onClick={() => setIsWindowVisible(false)}>
          <Texto
            size={"title-md-bold"}
            color={"var(--color-subtitulo-lila)"}
            label={"Connect Wallet"}
          />
        </button>
        <button
          className={"button-right"}
          onClick={() => setIsWindowVisible(true)}>
          <Texto
            size={"title-md-bold"}
            color={"#27262c"}
            label={"What's a Web3 wallet"}
          />
        </button>
      </div>
      <div className="ventana-prime">
        {!isWindowVisible && (
          <div className={classNames}>
            <Texto
              label={"Connect Wallet"}
              size={"title-ml-bold"}
              color={"var(--text-color)"}
            />
            <Texto
              label={
                "Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone."
              }
              size={"body-warningv2"}
              color={"var(--color-subtitulo-lila)"}
            />
            <div className="container-grid">
              <GridComposer3
                className={"theme3"}
                col={3}
                remRowSpacing={1.5}
                remColSpacing={2}
                connectWallet={connectWallet}
              />
            </div>
          </div>
        )}

        <div className={"ventana-secundaria"}>
          <div>
            <Texto
              label={"Haven't got a wallet yet?"}
              size={"title-ml-bold"}
              color={"var(--color-titulo-lila)"}
            />
          </div>
          <img
            style={{ maxHeight: "178px", maxWidth: "198px" }}
            src="https://cdn.pancakeswap.com/wallets/wallet_intro.png"
            alt="Bunny connect wallet"
          />
          <div>
            <Link
              href={
                "https://support.metamask.io/hc/es/articles/360015489531-Comenzar-con-MetaMask"
              }
              label={
                <Texto
                  size={"title-md-bold"}
                  color={"#27262c"}
                  label={"Learn How to Connect"}
                />
              }
              className={"modal-anchor"}
              svg={<ArrowRight />}
            />
          </div>
        </div>
      </div>
    </>
  );
};
