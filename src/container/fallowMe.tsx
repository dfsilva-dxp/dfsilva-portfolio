import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine
} from "react-icons/ri";

import { FallowMe } from "components";
import { useState } from "react";

export default function FallowMeContainer() {
  const [hovered, setHovered] = useState("");

  const socialIcons = [
    {
      name: "github",
      icon: <RiGithubLine />
    },
    {
      name: "instagram",
      icon: <RiInstagramLine />
    },
    {
      name: "linkedin",
      icon: <RiLinkedinBoxLine />
    }
  ];

  return (
    <FallowMe>
      <FallowMe.Message>siga-me nas redes sociais</FallowMe.Message>

      <FallowMe.SocialContainer>
        {socialIcons.map((icon) => {
          const isHovered = hovered === icon.name;

          return (
            <FallowMe.Icon
              key={icon.name}
              handleHoverStart={() => setHovered(icon.name)}
              handleHoverEnd={() => setHovered("")}
            >
              {isHovered && <FallowMe.Hovered />}
              {icon.icon}
            </FallowMe.Icon>
          );
        })}
      </FallowMe.SocialContainer>
    </FallowMe>
  );
}
