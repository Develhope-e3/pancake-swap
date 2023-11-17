import "./Button.scss";
import { Button } from "./Button";
import { useState, useEffect, useCallback } from "react";
import ArrowUp from "../../assets/iconos/ArrowUp";

export function ButtonScroll() {
  const [visible, setVisible] = useState(false);
  const scroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    var bunny = document.getElementById("bunny");

    if (bunny) {
      bunny.style.transform = "translateY(60px)";
    }

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else if (bunny) {
        bunny.style.transform = "translateY(-7px)";
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div style={{ display: visible ? "inline" : "none", position: "relative" }}>
      <Button isScroll isPrimary onClick={scroll} svg={<ArrowUp />} />
    </div>
  );
}
