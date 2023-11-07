import { ethers } from "ethers";

export const connectWallet = async (setWallet) => {
  if (window.ethereum == null) {
    console.log("Metamask not installed; using read only defaults");
  } else {
    await SwitchNetwork("0x94");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    setWallet(address);
  }
};

export const SwitchNetwork = async (networkData) => {
  console.log(networkData);

  // const addNetwork = await window.ethereum.request({
  //   method: "wallet_addEthereumChain",
  //   params: [
  //     {
  //       chainId: "0x94",
  //       rpcUrls: ["https://json-rpc.evm.shimmer.network"],
  //       chainName: "ShimmerEVM Mainnet",
  //       nativeCurrency: {
  //         name: "Shimmer",
  //         symbol: "SMR",
  //         decimals: 18,
  //       },
  //       blockExplorerUrls: ["https://explorer.evm.shimmer.network/"],
  //     },
  //   ],
  // });

  // await window.ethereum
  //   .request({
  //     method: "wallet_switchEthereumChain",
  //     params: [{ chainId: chainId }],
  //   })
  //   .then(() => console.log("Successfully! Connected to the requested Network"))
  //   .catch((err) => {
  //     if (err.message.startsWith("Unrecognized chain ID")) {
  //       addNetwork();
  //     }
  //   });
};
