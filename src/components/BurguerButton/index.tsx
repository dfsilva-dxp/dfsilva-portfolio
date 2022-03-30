import { BurguerProps, ButtonProps } from "./types";

import { Button, Content, Wrapper } from "./styles";

export default function Burguer({ children }: BurguerProps) {
  return <Wrapper>{children}</Wrapper>;
}

Burguer.Button = function BurguerButton({ children, ...props }: ButtonProps) {
  return <Button {...props}>{children}</Button>;
};

Burguer.Content = function BurguerContent() {
  return <Content />;
};
