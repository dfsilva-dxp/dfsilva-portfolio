import Image from "next/image";

import { PanelSkillProps } from "./types";

import { Panel } from "./styles";

export default function PanelSkill({
  title,
  imageURL,
  brPosition = "br"
}: PanelSkillProps) {
  return (
    <Panel brPosition={brPosition}>
      <Image src={imageURL} width={72} height={72} alt={title} title={title} />
      {title}
    </Panel>
  );
}
