import React from "react";
import "./ButtonWarning.scss";
import { useState } from "react";
import Button from "../Button/Button";

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
          className={className}
          onClick={handleClickHiddenWarning}
          svg={svg}
        />
      )}
    </>
  );
};

export default ButtonWarning;
