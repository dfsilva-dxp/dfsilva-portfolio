import {
  About,
  Base,
  DottedSquare,
  Grid,
  PanelSkill,
  Square
} from "components";

export default function AboutContainer() {
  return (
    <Base>
      <Base.Container>
        <Base.Grid />

        <About>
          <Grid>
            <About.Left>
              <PanelSkill
                title="Front-End Developer"
                imageURL="/img/front-end.svg"
                brPosition="tr"
              />
              <PanelSkill
                title="Front-End Developer"
                imageURL="/img/pixel-perfect.svg"
              />
              <PanelSkill
                title="Prototipagem & Wireframe"
                imageURL="/img/wireframe.svg"
                brPosition="bl"
              />

              <Square />
              <DottedSquare />
            </About.Left>

            <About.Right>
              <About.Title>Sobre mim.</About.Title>

              <About.Subtitle>
                Olá, meu nome é Daniel Francisco da Silva.
              </About.Subtitle>

              <About.Description>
                Sou Front-end developer a 4 anos, apaixonado por desenvolvimento
                com Reactjs, Nextjs e UI Design. Sua próxima ideia já tem um
                Dev!
              </About.Description>

              <About.Bars />
            </About.Right>
          </Grid>
        </About>
      </Base.Container>
    </Base>
  );
}
