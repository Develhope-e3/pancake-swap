import "./GridComposer.scss";
import Texto from "../Texto/Texto";
import CakeSum from "../Cake-sum/Cake-sum";
import Injected from "../../assets/iconos/Injected";
import Icono from "../Icono/Icono";
import ArrowUpDown from "../../assets/iconos/ArrowsUpDown";
import useWindowSize from "../../customHooks/ConnectWallet/useWindowSize ";

/**
 * @param {string} className - Clase para elegir qué theme de la Grid tendrá la tabla
 * @param {string} col - Para elegir la cantidad de columnas que tendrá el componente
 * @param {string} remRowSpacing - Espacio entre las filas de la tabla
 * @param {string} remColSpacing - Espacio entre las columnas de la tabla
 * @param {string} responsiveRow - Variable para redimensionado de la pantalla
 * @param {string} responsiveCol - Variable para redimensionado de la pantalla
 *
 * @returns Estructura HTML
 */

/**
 * TODO agregar data para hacer el componente más intuitivo y que reciba distintas cantidades de elementos y distintos styles "theme"
 */

export const GridComposer1 = ({
  className,
  col,
  remRowSpacing,
  remColSpacing,
  responsiveRow,
  responsiveCol,
}) => {
  const { width } = useWindowSize();
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gap: "1.5rem",
        /*gridTemplateColumns:
          width > 390 ? `repeat(${col}, 1fr)` : `repeat(2, 1fr)`,
        gripRowGap: width > 850 ? `${remRowSpacing}rem` : `${responsiveRow}rem`,
        gridColumnGap:
          width > 850 ? `${remColSpacing}rem` : `${responsiveCol}rem`, */
      }}>
      <div className="border-none">
        <>
          <Texto
            size={"title-s"}
            color={"var(--color-subtitulo-lila)"}
            label={"Circulating Supply"}
          />
          <Texto
            size={"title-ml"}
            color={"var(--color-text)"}
            label={<CakeSum limite={224927658} />}
          />
        </>
      </div>
      <div className="border-none">
        <>
          <Texto
            size={"title-s"}
            color={"var(--color-subtitulo-lila)"}
            label={"Total Supply"}
          />
          <Texto
            size={"title-ml"}
            color={"var(--color-text)"}
            label={<CakeSum limite={398365170} />}
          />
        </>
      </div>
      <div className="border-none">
        <>
          <Texto
            size={"title-s"}
            color={"var(--color-subtitulo-lila)"}
            label={"Max Supply"}
          />
          <Texto
            size={"title-ml"}
            color={"var(--color-text)"}
            label={<CakeSum limite={750000000} />}
          />
        </>
      </div>
      <div className="border-none">
        <>
          <Texto
            size={"title-s"}
            color={"var(--color-subtitulo-lila)"}
            label={"Market Cap"}
          />
          <Texto
            size={"title-ml"}
            color={"var(--color-text)"}
            label={"$280 million"}
          />
        </>
      </div>
      <div className="border-none">
        <>
          <Texto
            size={"title-s"}
            color={"var(--color-subtitulo-lila)"}
            label={"Burned to date"}
          />
          <Texto
            size={"title-ml"}
            color={"var(--color-text)"}
            label={<CakeSum limite={952660681} />}
          />
        </>
      </div>
      <div className="border-none">
        <>
          <Texto
            size={"title-s"}
            color={"var(--color-subtitulo-lila)"}
            label={"Current Emissions"}
          />
          <Texto
            size={"title-ml"}
            color={"var(--color-text)"}
            label={"$2,93/block"}
          />
        </>
      </div>
    </div>
  );
};

export const GridComposer2 = ({
  className,
  col,
  remRowSpacing,
  remColSpacing,
  responsiveRow,
  responsiveCol,
}) => {
  const { width } = useWindowSize();
  return (
    <>
      <div
        className={className}
        style={{
          display: "grid",
          gap: "1.5rem",
          /*
          @media (max-width: 980px)

           quitar 'width: "100%";'
          quitar dos elementos del grid y crear otro abajo con esos elementos */

          /* justifyItems: "center", */
          /* col: {3}, */

          /* width: "100%", */
          /* gridTemplateColumns:
            width > 390 ? `repeat(${col}, 1fr)` : `repeat(2, 1fr)`,
          gripRowGap:
            width > 768 ? `${remRowSpacing}rem` : `${responsiveRow}rem`,
          gridColumnGap:
            width > 768 ? `${remColSpacing}rem` : `${responsiveCol}rem`, */
        }}>
        <div className="title-container border-none">
          <span className="text">
            <Texto
              size={"title-ml-bold"}
              color={"var(--color-text)"}
              label={"Top"}
            />
            <Texto
              size={"title-ml-bold"}
              color={"var(--color-titulo-lila)"}
              label={"Farms"}
            />
            <Icono
              icono={<ArrowUpDown color={`var(--color-warning-text)`} />}
              className={`border-none`}
            />
          </span>
        </div>
        <div className="border-none">
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-titulo-lila)"}
              label={"EQB-BNB LP v3"}
            />
            <Texto
              size={"title-ml-bold"}
              color={"var(--color-text)"}
              label={<CakeSum limite={259595} />}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-subtitulo-lila)"}
              label={"APR"}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-titulo-lila)"}
              label={"DCK-BUSD LP v3"}
            />
            <Texto
              size={"title-ml-bold"}
              color={"var(--color-text)"}
              label={<CakeSum limite={398171116} />}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-subtitulo-lila)"}
              label={"APR"}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-titulo-lila)"}
              label={"MBX-USDT LP v3"}
            />
            <Texto
              size={"title-ml-bold"}
              color={"var(--color-text)"}
              label={"$260"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-subtitulo-lila)"}
              label={"APR"}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-titulo-lila)"}
              label={"MBX-BNB LP v3"}
            />
            <Texto
              size={"title-ml-bold"}
              color={"var(--color-text)"}
              label={<CakeSum limite={987196236} />}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-subtitulo-lila)"}
              label={"APR"}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-titulo-lila)"}
              label={"WNCG-BNB LP v3"}
            />
            <Texto
              size={"title-ml-bold"}
              color={"var(--color-text)"}
              label={"1.88/block"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-subtitulo-lila)"}
              label={"APR"}
            />
          </>
        </div>
      </div>
    </>
  );
};

export const GridComposer3 = ({
  className,
  col,
  remRowSpacing,
  remColSpacing,
  connectWallet,
}) => {
  return (
    <section
      /* screen and (min-width: 576px)
 .theme3 {
  remRowSpacing: 1.5;
  remColSpacing: 1;
  col= 2; */
      className={className}
      style={{
        display: "grid",
        justifyContent: "center",
        /* gridTemplateColumns: `repeat(${col}, 1fr)`, */
        gridRowGap: `${remRowSpacing}rem`,
        gridColumnGap: `${remColSpacing}rem`,
      }}>
      <button onClick={() => connectWallet()}>
        <div>
          <img
            className="injected-svg"
            src="https://assets.pancakeswap.finance/web/wallets/metamask.png"
            alt="MetaMask"
          />
          <Texto
            label={"Metamask"}
            size={"title-s"}
            color={"var(--color-text-grid-modal)"}
          />
        </div>
      </button>
      <button onClick={() => connectWallet()}>
        <div>
          <div className="injected-svg">
            <Injected color={"var(--color-injected-grid-modal)"} />
          </div>
          <Texto
            label={"Injected"}
            size={"title-s"}
            color={"var(--color-text-grid-modal)"}
          />
        </div>
      </button>
      <button>
        <div>
          <img
            src="	https://assets.pancakeswap.finance/web/wallets/binance.png"
            alt="Binance wallet"
          />
          <Texto
            label={"Binance Wallet"}
            size={"title-s"}
            color={"var(--color-text-grid-modal)"}
          />
        </div>
      </button>
      <button>
        <div>
          <img
            src="https://assets.pancakeswap.finance/web/wallets/coinbase.png"
            alt="Coinbase wallet"
          />
          <Texto
            label={"Coinbase Wallet"}
            size={"title-s"}
            color={"var(--color-text-grid-modal)"}
          />
        </div>
      </button>
      <button>
        <div>
          <img
            src="	https://assets.pancakeswap.finance/web/wallets/trust.png"
            alt="Trust wallet"
          />
          <Texto
            label={"Trust Wallet"}
            size={"title-s"}
            color={"var(--color-text-grid-modal)"}
          />
        </div>
      </button>
      <button>
        <div>
          <img
            src="https://assets.pancakeswap.finance/web/wallets/walletconnect.png"
            alt="WalletConnect"
          />
          <Texto
            label={"WalletConnect"}
            size={"title-s"}
            color={"var(--color-text-grid-modal)"}
          />
        </div>
      </button>
      <button>
        <div>
          <img
            src="https://assets.pancakeswap.finance/web/wallets/opera.png"
            alt="Opera wallet"
          />
          <Texto
            label={"Opera Wallet"}
            size={"title-s"}
            color={"var(--color-text-grid-modal)"}
          />
        </div>
      </button>
      <button>
        <div>
          <img
            src="https://assets.pancakeswap.finance/web/wallets/brave.png"
            alt="Brave wallet"
          />
          <Texto
            label={"Brave Wallet"}
            size={"title-s"}
            color={"var(--color-text-grid-modal)"}
          />
        </div>
      </button>
    </section>
  );
};
