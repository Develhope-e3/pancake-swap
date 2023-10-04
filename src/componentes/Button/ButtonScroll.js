import "./Button.scss";
import { Button } from "./Button";
import { useState, useEffect, useCallback } from "react";
import ArrowUp from "../../assets/iconos/ArrowUp";

export function ButtonScroll() {
  const bunny = document.getElementById("bunny");
  bunny.style.transform = "translateY(58px)";
  bunny.style.transition = "all 0.07s linear 0.07s";

  const [visible, setVisible] = useState(false);
  const scroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setVisible(true);
        bunny.style.transform = "translateY(-10px)";
      }

      if (window.scrollY < 3) {
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

/* ---------------------------------------------------- */

/*
useEffect(() => {
  const scrollDone = document.documentElement.scrollTop;
    if (scrollDone > 1000) {
      setVisible(true);
    }
}, []);
*/

/* ---------------------------------------------------- */

/* 
export function ButtonScroll() {
  const [bunnyStyle, setBunnyStyle] = useState({
    transform: "translateY(58px)",
    transition: "all 0.07s linear 0.07s",
  });

  const [visible, setVisible] = useState(false);

  const scroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setVisible(true);
        setBunnyStyle({
          transform: "translateY(-10px)",
          transition: "all 0.07s linear 0.07s",
        });
      }

      if (window.scrollY < 3) {
        setVisible(false);
        setBunnyStyle({
          transform: "translateY(58px)",
          transition: "all 0.07s linear 0.07s",
        });
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ display: visible ? "inline" : "none", position: "relative" }}>
      <Button
        isScroll
        style={{ style: `${bunnyStyle}` }}
        onClick={scroll}
        svg={<ArrowUp />}
      />
    </div>
  );
}
*/
