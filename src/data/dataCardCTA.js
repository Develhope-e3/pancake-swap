import ArrowRight from "../assets/iconos/ArrowRight";
import CrystallBall from "../assets/iconos/CrystalBall";
import { IoTicketSharp } from "react-icons/io5";
/**
 * TODO crear data para conectar los datos del texto de los botones al componente <Button/>
 */
export const dataCardCTA = [
  {
    style: "cta-card-yellow",
    icon: <CrystallBall color={"var(--text-color-black)"} />,
    prelude: { text: "Prediction", color: "--color-card-text" },
    title: { text: "$870 million", color: "--color-card-text" },
    subtitle: { text: "in BNB + CAKE won so far", color: "--color-card-text" },
    body: {
      text: "Predict the price rend of BNB or CAKE to win",
      color: "--color-card-text",
    },
    button: {
      text: "Play",
      color: "--text-color-black",
      icon: <ArrowRight color={"var(--text-color-black"} />,
    },
    onClick: () => {
      console.log("Click on Play");
    },
  },
  {
    style: "cta-card-violet",
    icon: <IoTicketSharp color={"var(--text-color)"} />,
    prelude: { text: "Lottery", color: "--text-color" },
    title: { text: "$32,031", color: "--color-secondary" },
    subtitle: {
      text: "in CAKE prizes this round",
      color: "--text-color",
    },
    body: {
      text: "Buy tickets with CAKE, win CAKE if your numbers match",
      color: "--text-color",
    },
    button: {
      text: "Buy Tickets",
      color: "--text-color-black",
      icon: <ArrowRight color={"var(--text-color-black"} />,
    },
    onClick: () => {
      console.log("Click on Buy Tickets");
    },
  },
];
