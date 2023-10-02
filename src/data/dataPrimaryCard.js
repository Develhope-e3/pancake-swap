import { MdOutlineGroups2 } from "react-icons/md";
import BreakPoints from "../assets/iconos/BreakPoints";
import ChartBar from "../assets/iconos/ChartBar";

export const dataPrimaryCard = [
  {
    icon: <MdOutlineGroups2 color="var(--color-titulo-lila)" />,
    title: { text: "1.1 million", color: "" },
    subtitle: { text: "users", color: "--color-titulo-lila" },
    body: "in the las 30 days",
  },
  {
    icon: <BreakPoints color={"var(--color-primary)"} />,
    title: { text: "13 million", color: "" },
    subtitle: { text: "trades", color: "--color-primary" },
    body: "made in the last 30 days",
  },
  {
    icon: <ChartBar color={"var(--color-failure)"} />,
    title: { text: "$1.3 billion", color: "" },
    subtitle: { text: "staked", color: "--color-failure" },
    body: "Total value Locked",
  },
];
