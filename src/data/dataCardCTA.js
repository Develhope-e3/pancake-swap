import CrystallBall from "../assets/iconos/CrystalBall";
import { IoTicketSharp } from "react-icons/io5";
/**
 * TODO crear data para conectar los datos del texto de los botones al componente <Button/>
 */
export const dataCardCTA = [
  {
    icon: <CrystallBall color={"var(--color-failure)"} />,
    prelude: { text: "Prediction", color: "--color-card-text" },
    title: { text: "$870 million", color: "--color-card-text" },
    subtitle: { text: "in BNB + CAKE won so far", color: "--color-card-text" },
    body: "Predict the price rend of BNB or CAKE to win",
    button: "Play",
    style: "cta-card-yellow",
  },
  {
    icon: <IoTicketSharp color={"var(--color-failure)"} />,
    prelude: { text: "Lottery", color: "--text-color" },
    title: { text: "$32,031", color: "--color-secondary" },
    subtitle: {
      text: "in CAKE prizes this round",
      color: "--text-color",
    },
    body: "Buy tickets with CAKE, win CAKE if your numbers match",
    button: "Buy Tickets",
    style: "cta-card-violet",
  },
];
