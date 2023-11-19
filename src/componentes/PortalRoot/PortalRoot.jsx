import Texto from "../Texto/Texto";
import "./PortalRoot.scss";
import { GridComposer3 } from "../GridComposer/GridComposer";
import { useState } from "react";
import Link from "../Link/Link";
import ArrowRight from "../../assets/iconos/ArrowRight";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

/**
 *
 * @param {*} param0 Explanation...
 * @param {*} param1 Explanation...
 * @param {*} param2 Explanation...
 *
 * @returns Estructura HTML
 */

export const PortalRoot = () => {
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
      <article className="ventana-prime">
        {!isWindowVisible && (
          <section className={classNames}>
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
        )}
        {
          <section className="ventana-secundaria">
            {/*             <div>
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
            </div> */}
            <div /* style={{ display: "none" }} */>
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide>
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
                  <Texto
                    label={
                      "A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more."
                    }
                    size={"body-warningv2"}
                    color={"var(--color-subtitulo-lila)"}
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
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div>
                    <Texto
                      label={"Login using a wallet connection"}
                      size={"title-ml-bold"}
                      color={"var(--color-titulo-lila)"}
                    />
                  </div>
                  <img
                    style={{ maxHeight: "178px", maxWidth: "198px" }}
                    src="https://cdn.pancakeswap.com/wallets/wallet_intro.png"
                    alt="Bunny connect wallet"
                  />
                  <Texto
                    label={
                      "A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more."
                    }
                    size={"body-warningv2"}
                    color={"var(--color-subtitulo-lila)"}
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
                </SwiperSlide> */}
              </Swiper>
            </div>
          </section>
        }
      </article>
    </>
  );
};
