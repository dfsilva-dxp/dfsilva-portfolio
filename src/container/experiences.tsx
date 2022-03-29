import { Base, Experiences, Work } from "components";
import { useState } from "react";
import { works } from "utils/mocks";

export default function ExperiencesContainer() {
  const [hovered, setHovered] = useState("");

  return (
    <Base>
      <Base.Container>
        <Base.Grid />
        <Experiences>
          <Experiences.Title>Meu Portfólio</Experiences.Title>

          <Experiences.Subtitle>Criando experiências!</Experiences.Subtitle>

          <Experiences.Works>
            {works.map((work, index) => {
              const isHovered = hovered === work.title;

              return (
                <Work
                  key={index}
                  handleHoverStart={() => setHovered(work.title)}
                  handleHoverEnd={() => setHovered("")}
                >
                  {isHovered && <Work.Hovered />}

                  <Work.Title>{work.title}</Work.Title>

                  <Work.Description>{work.description}</Work.Description>

                  <Work.Link to={work.repository_url}>ler mais...</Work.Link>
                </Work>
              );
            })}
          </Experiences.Works>
        </Experiences>
      </Base.Container>
    </Base>
  );
}
