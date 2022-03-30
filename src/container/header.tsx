import { Base, Grid, Header } from "components";
import { FallowMe } from "container";

export default function HeaderContainer() {
  return (
    <Base>
      <Base.Container>
        <Base.Grid />

        <Header>
          <Grid>
            <Header.Left>
              <Header.Title>Olá, eu sou um Artista de Pixel!</Header.Title>

              <Header.Description>
                Mas se preferir, <br />
                pode me chamar de <br />
                Front-End Developer
              </Header.Description>

              <Header.ShortDescription>
                E eu amo o que faço!
              </Header.ShortDescription>
            </Header.Left>

            <Header.Right />
          </Grid>

          <Header.Arrow />
          <FallowMe />
        </Header>
      </Base.Container>
    </Base>
  );
}
