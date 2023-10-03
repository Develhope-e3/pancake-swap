import React from "react";
import "./Button.scss";
import { useState } from "react";
import Button from "./Button";

export const ButtonWarning = ({ className, svg }) => {
  const [isShow, setIsShow] = useState(true);

  const handleClickHiddenWarning = () => {
    setIsShow(false);
    const warningElement = document.querySelector(".warning-header");
    const body = document.body;

    if (warningElement) {
      warningElement.style.transform = "translateY(-100px)";
      warningElement.style.transition = "all 0.2s linear 0.2s";
      body.style.transform = "translateY(-75px)";
      body.style.transition = "all 0.2s linear 0.2s";
    }
  };

  return (
    <>
      {isShow && (
        <Button
          isWarning={true}
          widthValue={"49px"}
          heightValue={"49px"}
          onClick={handleClickHiddenWarning}
          svg={svg}
        />
      )}
    </>
  );
};

export default ButtonWarning;
