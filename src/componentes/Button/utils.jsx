import React, { createContext, useContext, useState } from "react";
import * as ethers from "ethers";

export const connectWallet = async (setWallet, selectedNetwork) => {
  if (window.ethereum === null || undefined) {
    console.error("Metamask not installed; using read only defaults");
  } else {
    await SwitchNetwork(selectedNetwork);
    const provider = new ethers.BrowserProvider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setWallet(address);
  }
};

export const SwitchNetwork = async (networkData) => {
  const data = networkData.data[0];

  console.log(data);

  const addNetwork = await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        ...data,
      },
    ],
  });

  await window.ethereum
    .request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: networkData.data[0].chainId }],
    })
    .then(() => console.log("Successfully! Connected to the requested Network"))
    .catch((err) => {
      if (err.message.startsWith("Unrecognized chain ID")) {
        addNetwork();
      }
    });
};


// Crear el contexto con un valor por defecto
const WalletsContext = createContext({
  wallets: [],
  addWallet: () => {},
  removeWallet: () => {},
});

// Crear el proveedor
export const WalletsProvider = ({ children }) => {
  const [wallets, setWallets] = useState([]);

  // Función para agregar una nueva wallet
  const addWallet = (newWallet) => {
    setWallets((prevWallets) => [...prevWallets, newWallet]);
  };

  // Función para eliminar una wallet
  const removeWallet = (walletId) => {
    setWallets((prevWallets) =>
      prevWallets.filter((wallet) => wallet.id !== walletId),
    );
  };

  return (
    <WalletsContext.Provider value={{ wallets, addWallet, removeWallet }}>
      {children}
    </WalletsContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useWallets = () => {
  const context = useContext(WalletsContext);
  if (!context) {
    throw new Error("useWallets debe ser usado dentro de WalletsProvider");
  }
  return context;
};

