import Texto from "../componentes/Texto/Texto";
import Link from "../componentes/Link/Link";
import ArrowRight from "../assets/iconos/ArrowRight";
import Injected from "../assets/iconos/Injected";

/**
 * ToDo: Agregar data inerente a los botones de GridComposer y mapearla en ese componente.
 * ToDo: Crear también la data que renderizan los botones en las distintas ventanas del Modal.
 *  */

const ModalGridData = [
  {
    WalletButton: {
      style: "",
      onClick: () => {},
      buttonImg: {
        src: "https://assets.pancakeswap.finance/web/wallets/metamask.png",
        alt: "MetaMask",
      },
      texto: <Texto label={"Metamask"} size={"title-s"} color={"#f4eeff"} />,
    },
  },
  {
    WalletButton: {
      style: "",
      onClick: () => {},
      buttonSvg: {
        style: "injected",
        icon: <Injected color={"#f4eeff"} />,
      },
      texto: <Texto label={""} size={"title-s"} color={"#f4eeff"} />,
    },
  },
  {
    WalletButton: {
      style: "",
      onClick: () => {},
      buttonImg: {
        src: "",
        alt: "",
      },
      texto: <Texto label={""} size={"title-s"} color={"#f4eeff"} />,
    },
  },
  {
    WalletButton: {
      style: "",
      onClick: () => {},
      buttonImg: {
        src: "",
        alt: "",
      },
      texto: <Texto label={""} size={"title-s"} color={"#f4eeff"} />,
    },
  },
];

const ModalCardData = [
  {
    card: {
      style: "",
      title: <Texto label={""} size={""} color={""} />,
      cardImg: {
        src: "https://cdn.pancakeswap.com/wallets/wallet_intro.png",
        alt: "Bunny connect wallet",
      },
      description: <Texto label={""} size={""} color={""} />,
      LinkCard: (
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
      ),
    },
  },
  {
    card: {
      style: "",
      title: <Texto label={""} size={""} color={""} />,
      cardImg: {
        src: "https://cdn.pancakeswap.com/wallets/wallet_intro.png",
        alt: "Bunny connect wallet",
      },
      description: <Texto label={""} size={""} color={""} />,
      LinkCard: (
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
      ),
    },
  },
  {
    card: {
      style: "",
      title: <Texto label={""} size={""} color={""} />,
      cardImg: {
        src: "https://cdn.pancakeswap.com/wallets/wallet_intro.png",
        alt: "Bunny connect wallet",
      },
      description: <Texto label={""} size={""} color={""} />,
      LinkCard: (
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
      ),
    },
  },
];
