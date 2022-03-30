import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

import { BurguerButtonProps } from "./types";
import { Burguer } from "./styles";

export default function BurguerButton({ handleMenu }: BurguerButtonProps) {
  const [isOpen, setOpen] = useState(false);

  const pathOneControls = useAnimation();
  const pathTwoControls = useAnimation();

  const pathOneVariants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" }
  };

  const pathTwoVariants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" }
  };

  const onClick = async () => {
    setOpen(!isOpen);

    if (!isOpen) {
      await pathTwoControls.start(pathTwoVariants.moving);
      pathOneControls.start(pathOneVariants.open);
      pathTwoControls.start(pathTwoVariants.open);
    } else {
      pathOneControls.start(pathOneVariants.closed);
      await pathTwoControls.start(pathTwoVariants.moving);
      pathTwoControls.start(pathTwoVariants.closed);
    }
  };

  const handleClick = () => {
    onClick();
    handleMenu();
  };

  return (
    <Burguer onClick={handleClick}>
      <svg width="34" height="34" viewBox="0 0 24 24">
        <motion.path
          {...pathOneVariants.closed}
          animate={pathOneControls}
          transition={{ duration: 0.2 }}
          stroke="#FFFFFF"
        />
        <motion.path
          {...pathTwoVariants.closed}
          animate={pathTwoControls}
          transition={{ duration: 0.2 }}
          stroke="#FFFFFF"
        />
      </svg>
    </Burguer>
  );
}
