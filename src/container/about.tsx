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
                title="Artista de Pixel"
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

              <About.Subtitle>Me chamo Daniel Silva.</About.Subtitle>

              <About.Description>
                Sou formado em <em>Análise e desenvolvimento de sistemas</em>{" "}
                (2020) e, atualmente curso MBA em{" "}
                <em>Engenharia de Software</em>. Ambos pela FIAP.
              </About.Description>

              <About.Description>
                Front-end developer e artista de pixel a <em>4 anos</em>,
                apaixonado por desenvolvimento com <em>Reactjs</em>,{" "}
                <em>Nextjs</em> e <em>UI Design</em>.
              </About.Description>

              <About.Bars />
            </About.Right>
          </Grid>
        </About>
      </Base.Container>
    </Base>
  );
}
