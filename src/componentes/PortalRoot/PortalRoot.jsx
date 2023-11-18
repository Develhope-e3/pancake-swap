import Texto from "../Texto/Texto";
import "./PortalRoot.scss";
import { GridComposer3 } from "../GridComposer/GridComposer";
import { useState } from "react";
import Link from "../Link/Link";
import ArrowRight from "../../assets/iconos/ArrowRight";

/**
 *
 * @param {*} param0 Explanation...
 * @param {*} param1 Explanation...
 * @param {*} param2 Explanation...
 *
 * @returns Estructura HTML
 */

export const PortalRoot = () => {
  const [window, setWindow] = useState(null);

  return (
    <>
      <div className="container-buttons">
        <button
          className={"button-left"}
          onClick={() => console.log("button left")}>
          <Texto
            size={"title-md-bold"}
            color={"var(--color-subtitulo-lila)"}
            label={"Connect Wallet"}
          />
        </button>
        <button
          className={"button-right"}
          onClick={() => console.log("button right")}>
          <Texto
            size={"title-md-bold"}
            color={"#27262c"}
            label={"What's a Web3 wallet"}
          />
        </button>
      </div>
      <article className="ventana-prime">
        <section className="ventana-primaria">
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
            />
          </div>
        </section>
        <section className="ventana-secundaria">
          <div>
            <Texto
              label={"Haven't got a wallet yet?"}
              size={"title-ml-bold"}
              color={"var(--color-titulo-lila)"}
            />
          </div>
          <img
            className="bunny-connect-wallet"
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
        </section>
      </article>
    </>
  );
};
