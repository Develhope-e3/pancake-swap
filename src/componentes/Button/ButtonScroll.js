import "./Button.scss";
import { Button } from "./Button";
import { useState, useEffect, useCallback } from "react";
import ArrowUp from "../../assets/iconos/ArrowUp";

export function ButtonScroll() {
  const [visible, setVisible] = useState(true);
  const scroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  },)

  useEffect(() => {
    const scrollDone = document.documentElement.scrollTop;
    if(scrollDone <= 500) {
      setVisible(true);
    }
  },)
  
  return (
    <div
      className="button-scroll"
      style={{ display: visible ? "inline" : "none" }}
    >
      <Button
        isPrimary={true}
        onClick={scroll}
        widthValue={"50px"}
        heightValue={"50px"}
        svg={<ArrowUp/>}
      />
    </div>
  );
}
