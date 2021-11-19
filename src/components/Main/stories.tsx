import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Main from ".";

export default {
  title: "Main",
  component: Main,
  args: {
    title: "React Avançado",
    description: "TypeScript, React, NextJS e Styled Componets"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Main>> = () => {
  return <Main />;
};
