import ethers from "ethers";
import { useContext, useState, createContext } from "react";

const WalletContext = createContext(ethers);

export const ScriptWalletProvider = ({children}) => {
  const [wallet, setWallet] = useState(ethers.Contract);

  const changeWallet = () => {
    setWallet(ethers.Wallet);
  };

  return (
    <>
      <WalletContext.Provider value={{wallet, changeWallet}}>

        <script type="module">ScriptWallet</script>
        {children}
      </WalletContext.Provider>
    </>
  );
};

export const ScriptWalletConsumer = () => {
  const { wallet, changeWallet } = useContext();

  return (
    <>
    
    </>
  );
};
