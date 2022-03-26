import { GridProps } from "./types";

import { Display } from "./styles";

export default function Grid({ children }: GridProps) {
  return <Display>{children}</Display>;
}
