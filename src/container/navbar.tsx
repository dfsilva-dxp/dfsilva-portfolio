import { Base, BurguerButton, Logo, Menu, Navbar } from "components";
import { useState } from "react";

export default function NavbarContainer() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Navbar>
        <Base.Container>
          <Navbar.Grid>
            <Logo />

            <BurguerButton handleMenu={handleClick} />
          </Navbar.Grid>
        </Base.Container>
      </Navbar>

      <Menu isActive={isActive}>
        <Menu.Background />
        <Menu.Overlay />
        <Base.Container>
          <Menu.Content>
            <Base.Grid />
            <ul>
              <li>Fullscreen Menu</li>
            </ul>
          </Menu.Content>
        </Base.Container>
      </Menu>
    </>
  );
}
