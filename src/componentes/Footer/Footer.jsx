import "./Footer.scss";
import Texto from "../Texto/Texto";
import Link from "../Link/Link";
import Button from "../Button/Button";
/* import Dropdown from "../Dropdown/Dropdown"; */
import Twitter from "../../assets/iconos/Twitter";
import Telegram from "../../assets/iconos/Telegram";
import Reddit from "../../assets/iconos/Reddit";
import Instagram from "../../assets/iconos/Instagram";
import GitHub from "../../assets/iconos/GitHub";
import Discord from "../../assets/iconos/Discord";
import Youtube from "../../assets/iconos/YouTube";
import Toggle from "../Button/Toggle";
import BunnySmall from "../../assets/iconos/BunnySmall";
import conejosvg from "../../assets/conejo.svg";

/**
 *  ToDo: Utilizar Dropdown para configurar los idiomas del Mundo
 */

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* columnas links footer */}
        <div className="div-padre-1">
          <div className="columnas-footer">
            <Texto
              size={"title-md-bold"}
              label={"ABOUT"}
              color={"var(--color-titulo-footer)"}
            />
            <Link className={"footer-anchor-secondary"} label={"Contact"} />
            <Link className={"footer-anchor"} label={"Brand"} />
            <Link className={"footer-anchor"} label={"Blog"} />
            <Link className={"footer-anchor"} label={"Community"} />
            <Link className={"footer-anchor"} label={"Litepaper"} />
            <Link
              className={"footer-anchor"}
              label={"CAKE Emission Projection"}
            />
            <Link className={"footer-anchor"} label={"Terms of Service"} />
            <div className="raya-blanca"></div>
            <Link className={"footer-anchor-secondary"} label={"Merchandise"} />
          </div>

          <div className="columnas-footer">
            <Texto
              size={"title-md-bold"}
              label={"HELP"}
              color={"var(--color-titulo-footer)"}
            />
            <Link className={"footer-anchor"} label={"Customer Support"} />
            <Link className={"footer-anchor"} label={"TroubleShooting"} />
            <Link className={"footer-anchor"} label={"Guides"} />
          </div>

          <div className="columnas-footer">
            <Texto
              size={"title-md-bold"}
              label={"DEVELOPERS"}
              color={"var(--color-titulo-footer)"}
            />
            <Link className={"footer-anchor"} label={"Github"} />
            <Link className={"footer-anchor"} label={"Documentation"} />
            <Link className={"footer-anchor"} label={"Bug Bounty"} />
            <Link className={"footer-anchor"} label={"Audits"} />
            <Link className={"footer-anchor"} label={"Careers"} />
          </div>
        </div>
        {/* ------------------------------------------ */}
        <div className="footer-icon">
          <img src={conejosvg} alt="conejo" />
        </div>
        {/* ------------------------------------------ */}
        <div className="iconos-padre">
          {/* iconos redes */}
          <div>
            <Link href={"https://www.twitter.com"} svg={<Twitter />} />
          </div>
          <div>
            <Link href={"https://t.me/pancakeswapES"} svg={<Telegram />} />
          </div>
          <div>
            <Link
              href={"https://www.reddit.com/r/pancakeswap/"}
              svg={<Reddit />}
            />
          </div>
          <div>
            <Link
              className={"iconos-redes"}
              href={"https://www.instagram.com/pancakeswap_official/"}
              svg={<Instagram />}
            />
          </div>
          <div>
            <Link
              className={"iconos-redes"}
              href={"https://github.com/pancakeswap/"}
              svg={<GitHub />}
            />
          </div>
          <div>
            <Link
              className={"iconos-redes"}
              url={"https://discord.com/invite/pancakeswap"}
              svg={<Discord />}
            />
          </div>
          <div>
            <Link
              className={"iconos-redes"}
              url={"https://www.youtube.com/@pancakeswap_official"}
              svg={<Youtube />}
            />
          </div>
        </div>
        {/* iconos redes */}
        <div className="raya-divisora-padre">
          <div className="raya-divisora"></div>
        </div>
        <div className="parte-abajo-footer">
          {/* parte de abajo footer */}

          <div className="parte-abajo-izq">
            <Toggle />
            <Link
              className={"dropdown-secundario"}
              svg={
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M3.6 9h16.8"></path>
                  <path d="M3.6 15h16.8"></path>
                  <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                  <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                </svg>
              }
            />
            <p>ES</p>
          </div>
          <div className="parte-abajo-derecha">
            <Link
              className={"button-bunny"}
              svg={<BunnySmall />}
              label={"$1.184"}
              href={"www.google.com"}
            />
            <Button
              isFooter={true}
              heightValue={"32px"}
              widthValue={"138px"}
              texto={"Buy CAKE"}
              svg={
                <svg
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" />
                </svg>
              }
            />
          </div>
        </div>
        {/* parte de abajo footer */}
      </div>
    </footer>
  );
};

export default Footer;
