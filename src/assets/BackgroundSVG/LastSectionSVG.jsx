/**
 * @param {None} None - Este componente no tiene parametros
 *
 * @returns
 */

import { useSpring , animated } from "react-spring";
import Button from "../../componentes/Button/Button";
import Link from "../../componentes/Link/Link";
import { Section } from "../../componentes/Section/Section";
import { Box } from "../../componentes/Section/Section2/Box";
import Texto from "../../componentes/Texto/Texto";
import pancake from "../imagenes/asset 55.png"
import pancake2 from "../imagenes/asset 49.png";

export const LastSectionSVG = () => {
  const { translateY } = useSpring({
    to: { translateY: 8 },
    from: { translateY: 0 },
    loop: true,
    config: { tension: 2, friction: 0 }
  })
  return (
    <Section gradient={"var(--colors-gradientLastSection)"}>
      <Box maxWidth={1168} lastSeccion={true}>
        <Box isFlexColCenter gap={2}>
          <Texto
            size={"title-card-bold"}
            color={"var(--text-color)"}
            label={"Start in seconds"}
          />

          <Texto
            size={"title-ml"}
            color={"var(--text-color)"}
            label={
              "Connect your crypto wallet to start using the app in seconds."
            }
          />
          <Texto
            size={"title-ml-bold"}
            color={"var(--text-color)"}
            label={"No registration needed"}
          />

          <Link
            label={"Learn how to start"}
            className={"primary-anchor"}
            href={""}
            svg={
              <svg
                viewBox="0 0 24 24"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="anchorSVG">
                <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
              </svg>
            }
          />
          <Button
            isPrimary
            widthValue={"165.15px"}
            heightValue={"48px"}
            texto={"Connect Wallet"}
            colorTexto={"var(--color-button-primary)"}
          />
          <animated.img
            src={pancake}
            alt="img"
            className={"img-mov"}
            style={{ translateY }}
          />
          <animated.img
            src={pancake2}
            alt="img"
            className={"img-mov2"}
            style={{ translateY }}
          />
        </Box>

        <svg
          viewBox="0 0 1956 1956"
          color="text"
          /* width="100%"
      height="100%" */
          className="last-section-svg"
          xmlns="http://www.w3.org/2000/svg"
          id="last-section">
          {" "}
          {/* url(#last-section) */}
          <g filter="url(#filter0_f)">
            <path
              d="M978 20L987.526 796.229L1078.14 25.248L1006.47 798.221L1177.18 40.9346L1025.11 802.182L1274.04 66.8879L1043.23 808.07L1367.65 102.823L1060.64 815.819L1457 148.348L1077.14 825.345L1541.1 202.962L1092.55 836.544L1619.03 266.067L1106.71 849.292L1689.93 336.973L1119.46 863.451L1753.04 414.902L1130.65 878.865L1807.65 499L1140.18 895.365L1853.18 588.346L1147.93 912.77L1889.11 681.962L1153.82 930.89L1915.07 778.821L1157.78 949.526L1930.75 877.862L1159.77 968.474L1936 978L1159.77 987.526L1930.75 1078.14L1157.78 1006.47L1915.07 1177.18L1153.82 1025.11L1889.11 1274.04L1147.93 1043.23L1853.18 1367.65L1140.18 1060.64L1807.65 1457L1130.65 1077.14L1753.04 1541.1L1119.46 1092.55L1689.93 1619.03L1106.71 1106.71L1619.03 1689.93L1092.55 1119.46L1541.1 1753.04L1077.14 1130.65L1457 1807.65L1060.64 1140.18L1367.65 1853.18L1043.23 1147.93L1274.04 1889.11L1025.11 1153.82L1177.18 1915.07L1006.47 1157.78L1078.14 1930.75L987.526 1159.77L978 1936L968.474 1159.77L877.862 1930.75L949.526 1157.78L778.821 1915.07L930.89 1153.82L681.962 1889.11L912.77 1147.93L588.346 1853.18L895.365 1140.18L499 1807.65L878.865 1130.65L414.902 1753.04L863.451 1119.46L336.973 1689.93L849.292 1106.71L266.067 1619.03L836.544 1092.55L202.962 1541.1L825.345 1077.14L148.348 1457L815.819 1060.64L102.823 1367.65L808.07 1043.23L66.8879 1274.04L802.182 1025.11L40.9346 1177.18L798.221 1006.47L25.248 1078.14L796.229 987.526L20 978L796.229 968.474L25.248 877.862L798.221 949.526L40.9346 778.821L802.182 930.89L66.8879 681.962L808.07 912.77L102.823 588.346L815.819 895.365L148.348 499L825.345 878.865L202.962 414.902L836.544 863.451L266.067 336.973L849.292 849.292L336.973 266.067L863.451 836.544L414.902 202.962L878.865 825.345L499 148.348L895.365 815.819L588.346 102.823L912.77 808.07L681.962 66.8879L930.89 802.182L778.821 40.9346L949.526 798.221L877.862 25.248L968.474 796.229L978 20Z"
              fill="url(#paint0_radial)"
              fillOpacity="0.1"></path>
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="0"
              y="0"
              width="1956"
              height="1956"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"></feBlend>
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur"></feGaussianBlur>
            </filter>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(978 978) rotate(90) scale(958)">
              <stop offset="0.114547" stopColor="white" stopOpacity="0"></stop>
              <stop offset="0.374975" stopColor="white"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </Box>
    </Section>
  );
};
