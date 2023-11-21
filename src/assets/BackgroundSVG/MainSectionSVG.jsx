import "./StylesSVG.scss";

const MainSectionSVG = () => {
  return (
      <svg
        viewBox="0 0 1660 339"
        className="mainsectionsvg"
        width="100%"
        color="text"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
          fill="url(#paint0_linear_dark)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_dark"
            x1="830"
            y1="83.5"
            x2="830"
            y2="338.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#08060B" stop-opacity="0.2"></stop>
            <stop
              offset="0.545554"
              stop-color="#08060B"
              stop-opacity="0.5"
            ></stop>
            <stop offset="1" stop-color="#08060B"></stop>
          </linearGradient>
        </defs>
      </svg>
  );
};

export default MainSectionSVG;
