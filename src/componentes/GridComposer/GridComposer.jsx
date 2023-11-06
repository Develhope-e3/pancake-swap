import "./GridComposer.scss";
import Texto from "../Texto/Texto";
import CakeSum from "../Cake-sum/Cake-sum";
import Injected from "../../assets/iconos/Injected";
import { connectWallet } from "../Button/utils";
import Icono from "../Icono/Icono";
import ArrowUpDown from "../../assets/iconos/ArrowsUpDown";

/**
 * @param {string} className - clase para elegir qué theme de la Grid tendrá la tabla
 * @param {string} col - Para elegir la cantidad de columnas que tendrá el componente
 * @param {string} remRowSpacing - Espacio entre las filas de la tabla
 * @param {string} remColSpacing - Espacio entre las columnas de la tabla
 *
 * @returns Estructura HTML
 */

/**
 *
 * TODO agregar data para hacer el componente más intuitivo y que reciba distintas cantidades de elementos y distintos styles "theme"
 *
 */

export const GridComposer1 = ({
  className,
  col,
  remRowSpacing,
  remColSpacing,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridRowGap: `${remRowSpacing}rem`,
        gridColumnGap: `${remColSpacing}rem`,
      }}>
      <div>
        <>
          <Texto
            size={"title-s"}
            color={"var(--color-subtitulo-lila)"}
            label={"Circulating Supply"}
          />
          <Texto
            size={"title-ml"}
            color={"var(--color-text)"}
            label={<CakeSum limite={22492} />}
          />
        </>
      </div>
      <div>
        <>
          <Texto
            size={"title-s"}
            color={"var(--color-subtitulo-lila)"}
            label={"Total Supply"}
          />
          <Texto
            size={"title-ml"}
            color={"var(--color-text)"}
            label={<CakeSum limite={398365} />}
          />
        </>
      </div>
      <div>
        <>
          <Texto
            size={"title-s"}
            color={"var(--color-subtitulo-lila)"}
            label={"Max Supply"}
          />
          <Texto
            size={"title-ml"}
            color={"var(--color-text)"}
            label={<CakeSum limite={750000} />}
          />
        </>
      </div>
      <div>
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
      <div>
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
      <div>
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
}) => {
  return (
    <>
      <div
        className={className}
        style={{
          display: "grid",
          gap: "1.5rem",
          width: "100%",
          gridTemplateColumns: `repeat(${col}, 1fr)`,
          gridRowGap: `${remRowSpacing}rem`,
          gridColumnGap: `${remColSpacing}rem`,
        }}>
        <div className="title-container border-none">
          <span className="text">
            <Texto
              size={"title-ml"}
              color={"var(--color-text)"}
              label={"Top"}
            />
            <Texto
              size={"title-ml"}
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
              color={"var(--color-text)"}
              label={"Circulating Supply"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-titulo-lila)"}
              label={<CakeSum limite={259595} />}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-text)"}
              label={"Total Supply"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-titulo-lila)"}
              label={<CakeSum limite={398171116} />}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-text)"}
              label={"Market Cap"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-titulo-lila)"}
              label={"$260 million"}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-text)"}
              label={"Token Burn"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-titulo-lila)"}
              label={<CakeSum limite={987196236} />}
            />
          </>
        </div>
        <div>
          <>
            <Texto
              size={"title-s"}
              color={"var(--color-text)"}
              label={"Curren Emissions"}
            />
            <Texto
              size={"title-ml"}
              color={"var(--color-titulo-lila)"}
              label={"1.88/block"}
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
      className={className}
      style={{
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridRowGap: `${remRowSpacing}rem`,
        gridColumnGap: `${remColSpacing}rem`,
      }}>
      <button onClick={() => connectWallet()}>
        <div>
          <img
            src="https://assets.pancakeswap.finance/web/wallets/metamask.png"
            alt="MetaMask"
          />
          <Texto label={"Metamask"} size={"title-s"} color={"#f4eeff"} />
        </div>
      </button>
      <button onClick={() => connectWallet()}>
        <div>
          <div className="injected-svg">
            <Injected color={"#f4eeff"} />
          </div>
          <Texto label={"Injected"} size={"title-s"} color={"#f4eeff"} />
        </div>
      </button>
      <button>
        <div>
          <img
            src="	https://assets.pancakeswap.finance/web/wallets/binance.png"
            alt="Binance wallet"
          />
          <Texto label={"Binance Wallet"} size={"title-s"} color={"#f4eeff"} />
        </div>
      </button>
      <button>
        <div>
          <img
            src="https://assets.pancakeswap.finance/web/wallets/coinbase.png"
            alt="Coinbase wallet"
          />
          <Texto label={"Coinbase Wallet"} size={"title-s"} color={"#f4eeff"} />
        </div>
      </button>
      <button>
        <div>
          <img
            src="	https://assets.pancakeswap.finance/web/wallets/trust.png"
            alt="Trust wallet"
          />
          <Texto label={"Trust Wallet"} size={"title-s"} color={"#f4eeff"} />
        </div>
      </button>
      <button>
        <div>
          <img
            src="https://assets.pancakeswap.finance/web/wallets/walletconnect.png"
            alt="WalletConnect"
          />
          <Texto label={"WalletConnect"} size={"title-s"} color={"#f4eeff"} />
        </div>
      </button>
      <button>
        <div>
          <img
            src="https://assets.pancakeswap.finance/web/wallets/opera.png"
            alt="Opera wallet"
          />
          <Texto label={"Opera Wallet"} size={"title-s"} color={"#f4eeff"} />
        </div>
      </button>
      <button>
        <div>
          <img
            src="https://assets.pancakeswap.finance/web/wallets/brave.png"
            alt="Brave wallet"
          />
          <Texto label={"Brave Wallet"} size={"title-s"} color={"#f4eeff"} />
        </div>
      </button>

    </section>
  );
};
