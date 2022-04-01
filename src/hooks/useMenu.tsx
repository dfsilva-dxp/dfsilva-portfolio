import { useCallback, useEffect, useState } from "react";

export const useMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function getWidth() {
      setWidth(window.screen.width);
    }

    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  useEffect(() => {
    function resize() {
      if (width >= 768 && isActive) setIsActive(false);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [width, isActive]);

  const toggleMenu = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return { isActive, toggleMenu };
};
