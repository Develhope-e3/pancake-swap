import "./StylesSVG.scss";
import { useTheme } from "../../context/ThemeContext";

const MainSectionSVG = () => {
  const { theme } = useTheme();

  return (
    <>
      <DarkOrLightSVG theme={theme} />
    </>
  );
};

export default MainSectionSVG;

function DarkOrLightSVG() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        bottom: "-1rem",
        left: "0rem",
        overflow: "hidden",
        width: "100%",
      }}>
      <svg
        viewBox="0 0 1660 338"
        width="100%"
        color="text"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
          fill={
            theme === "dark"
              ? "url(#paint0_linear_dark)"
              : "url(#paint0_linear_light)"
          }
        />
        <defs>
          <linearGradient
            id={theme === "dark" ? "paint0_linear_dark" : "paint0_linear_light"}
            x1="830"
            y1="83.5"
            x2="830"
            y2="338.5"
            gradientUnits="userSpaceOnUse">
            <stop
              stopColor={theme === "dark" ? "#08060B" : "#ffffff"}
              stopOpacity="0.2"
            />
            <stop
              offset="0.545554"
              stopColor={theme === "dark" ? "#08060B" : "#ffffff"}
              stopOpacity="0.5"
            />
            <stop
              offset="1"
              stopColor={theme === "dark" ? "#08060B" : "#ffffff"}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
