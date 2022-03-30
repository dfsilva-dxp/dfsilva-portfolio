import { useCallback, useState } from "react";

export const useMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return { isActive, toggleMenu };
};
