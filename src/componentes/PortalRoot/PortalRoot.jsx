import Texto from "../Texto/Texto";
import classnames from "classnames";
import "./PortalRoot.scss";
import { GridComposer3 } from "../GridComposer/GridComposer";

/**
 *
 * @param {*} param0 Explanation...
 * @param {*} param1 Explanation...
 * @param {*} param2 Explanation...
 *
 * @returns Estructura HTML
 */

export const PortalRoot = ({ isPrimaria, isSecundaria }) => {
  /*   const className = classnames({
    ventanaPrimaria: ventanaPrimaria,
    ventanaSecundaria: ventanaSecundaria,
  }); */

  return (
    <>
      <div className="container-buttons">
        <button className={"button-left"} onClic={""}>
          <Texto
            size={"title-md-bold"}
            color={"#b8add2"}
            label={"Connect Wallet"}
          />
        </button>
        <button className={"button-right"} onClic={""}>
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
            color={"var(--text-color)"}
          />
          <div className="container-grid">
            <GridComposer3 className={"theme3"} col={3} remRowSpacing={1.5} />
          </div>
        </section>
        <section className="ventana-secundaria">
          <div>
            <Texto
              label={"title-ml-bold"}
              size={"title-ml-bold"}
              color={"var(--text-color)"}
            />
          </div>
          <div>
            <button>Hola</button>
          </div>
        </section>
      </article>
    </>
  );
};
