import React from "react";
import "../WarningHeader/WarningHeader.scss";
import ButtonWarning from "../Button/ButtonWarning";
import Texto from "../Texto/Texto";
import PhishingWarningBunny from "../../assets/imagenes/PhishingWarningBunny.png";
import CrossDelete from "../../assets/iconos/CrossDelete";

export function WarningHeader() {
  return (
    <div name="warning" className={"warning-header"}>
      <div className="main-container">
        <div className="box-container">
          <img src={PhishingWarningBunny} alt="bunny" />
          <div className="text-container-todo">
            <Texto
              size={"body-warningv1"}
              color={"var(--color-secondary)"}
              label={"PHISHING WARNING: "}
            />
            <Texto
              size={"body-warningv2"}
              color={"var(--color-warning-text)"}
              label={" please make sure you're visiting "}
            />
            <Texto
              size={"body-warningv1"}
              color={"var(--text-color)"}
              label={" https://pancakeswap.finance "}
            />
            <Texto
              size={"body-warningv2"}
              color={"var(--color-warning-text)"}
              label={" - check the URL carefully."}
            />
          </div>
        </div>
        <div className="button-container">
          <ButtonWarning
            className={"button-warning"}
            svg={<CrossDelete color={"var(--text-color)"} />}
          />
        </div>
      </div>
    </div>
  );
}
