import "./PortalRoot.scss";
import { useEffect, useState } from "react";

/**
 * TODO: El botón "connect-wallet" tendrá que conectar al body e implementarle un "overflow: hidden" para poder mostrar correctamente la sección. Mientras que body tendrá que conservar permanentemente un "overflow: overlay" antes de hacer click en el botón
 *  */

/* const handleClickWallet = () => {
  setAppear(true);
  document.body.style.overflow = "hidden";
};

export const PortalRoot = () => {
  const [appear, setAppear] = useState(false);


  useEffect(() => {
    return () => {
      document.body.style.overflow = "overlay";
    };
  }, []);

  return (
    <>
      {appear && (
        <div id="portal-root">
          <div className="appear"></div>
        </div>
      )}
      <button id="connect-wallet" onClick={handleClickWallet}>
        Connect Wallet
      </button>
    </>
  );
};
 */


export const PortalRoot = () => {
  const [appear, setAppear] = useState(false);

  const handleClickWallet = () => {
    setAppear(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const portalRoot = document.getElementById("portal-root");
      const connectWalletButton = document.getElementById("connect-wallet");

      if (
        appear &&
        portalRoot &&
        !portalRoot.contains(event.target) &&
        connectWalletButton &&
        !connectWalletButton.contains(event.target)
      ) {
        setAppear(false);
        document.body.style.overflow = "overlay";
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "overlay";
    };
  }, [appear]);

  return (
    <>
      {appear && (
        <div id="portal-root">
          <div className="appear"></div>
        </div>
      )}
      <button id="connect-wallet" onClick={handleClickWallet}>
        Connect Wallet
      </button>
    </>
  );
};
