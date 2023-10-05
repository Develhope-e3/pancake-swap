import "./Button.scss";
import { Button } from "./Button";
import { useState, useEffect, useCallback } from "react";
import ArrowUp from "../../assets/iconos/ArrowUp";

export function ButtonScroll() {
  const bunny = document.getElementById("bunny");
  bunny.style.transform = "translateY(60px)";

  const [visible, setVisible] = useState(false);
  const scroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
        bunny.style.transform = "translateY(-7px)";
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bunny.style]);

  return (
    <div style={{ display: visible ? "inline" : "none", position: "relative" }}>
      <Button isScroll onClick={scroll} svg={<ArrowUp />} />
    </div>
  );
}
