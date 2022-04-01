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
                O importante é que saibam, que eu amo o que faço!
              </Header.ShortDescription>

              <FallowMe />
            </Header.Left>

            <Header.Right />
          </Grid>

          <Header.Arrow />
        </Header>
      </Base.Container>
    </Base>
  );
}
