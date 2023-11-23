import "./StylesSVG.scss";

const MainSectionSVG = () => {
  return (
    <svg
      viewBox="430 0 1200 307"
      className="mainsectionsvg"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{width:"1200px"}}
        d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
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
          <stop stopColor="var(--background-color-card-title)" stopOpacity="0.2"></stop>
          <stop
            offset="0.545554"
            stopColor="var(--background-color-card-title)"
            stopOpacity="0.5"
          ></stop>
          <stop offset="1" stopColor="var(--background-color-card-title)"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MainSectionSVG;


/* <svg viewBox="0 0 1660 339" class="sc-bcPKhP cvmRst slide-svg-light" width="100%" color="text" xmlns="http://www.w3.org/2000/svg"><path d="M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z" fill="url(#paint0_linear_light)"></path><defs><linearGradient id="paint0_linear_light" x1="830" y1="84" x2="830" y2="339" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.48"></stop><stop offset="0.566389" stop-color="white" stop-opacity="0.35"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg> */
