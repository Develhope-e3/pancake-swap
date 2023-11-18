import ethers from "ethers";
import { useState } from "react";

/**
 *
 * @param {} asd - ASDF
 *
 * @returns Estructura HTML
 */

export const useConnectWallet = async ({ _chainId }) => {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  let chainId = _chainId;

  const addNetwork = await provider.request({
    method: "eth_requestAccounts",
    params: [
      {
        chainId: "",
        chainName: "",
        nativeCurrency: {
          name: "",
          symbol: "",
          decimals: 10,
        },
        blockExplorerUrls: "",
      },
    ],
  });

  setPending(true);
  const requestAccount = await window.ethereum
    .request({
      method: "",
      params: [{ chainId: chainId }],
    })
    .then(() => console.log("Successfully!"))
    .catch((err) => setError(err.message))
    .finally(() => setPending(false));

  const signer = provider.getSigner();

  const transaction = await signer.sendTransaction({
    to: "0xRecipientAddress",
    value: ethers.utils.parseEther("0.1"),
  });

  return [error, pending, provider, addNetwork, transaction, signer, requestAccount];
};
