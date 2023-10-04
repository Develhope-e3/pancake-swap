import ArrowRight from "../assets/iconos/ArrowRight";
import CrystallBall from "../assets/iconos/CrystalBall";
import { IoTicketSharp } from "react-icons/io5";
import CakeSum from "../componentes/Cake-sum/Cake-sum";

export const dataCardCTA = [
  {
    style: "cta-card-yellow",
    icon: <CrystallBall color={"var(--text-color-black)"} />,
    prelude: { text: "Prediction", color: "var(--color-card-text)" },
    title: { text: "$880 million", color: "var(--color-card-text)" },
    subtitle: { text: "in BNB + CAKE won so far", color: "var(--color-card-text)" },
    body: {
      text: "Predict the price rend of BNB or CAKE to win",
      color: "var(--color-card-text)",
    },
    button: {
      text: "Play",
      color: "var(--text-color-black)",
      icon: <ArrowRight color={"var(--text-color-black"} />,
    },
    onClick: () => {
      console.log("Click on Play");
    },
  },
  {
    style: "cta-card-violet",
    icon: <IoTicketSharp color={"var(--text-color)"} />,
    prelude: { text: "Lottery", color: "var(--text-color)" },
    title: {
      text: <CakeSum className={"title-card"} limite={32429} />,
      color: "var(--color-secondary)",
    },
    subtitle: {
      text: "in CAKE prizes this round",
      color: "var(--text-color)",
    },
    body: {
      text: "Buy tickets with CAKE, win CAKE if your numbers match",
      color: "var(--text-color)",
    },
    button: {
      text: "Buy Tickets",
      color: "var(--text-color-black)",
      icon: <ArrowRight color={"var(--text-color-black"} />,
    },
    onClick: () => {
      console.log("Click on Buy Tickets");
    },
  },
];
