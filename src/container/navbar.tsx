import { useState } from "react";
import { Link } from "react-scroll";

import { useMenu } from "hooks/useMenu";

import { Base, Burguer, Logo, Menu, Navbar, NavLinks } from "components";

export default function NavbarContainer() {
  const [hovered, setHovered] = useState("");

  const { isActive, toggleMenu } = useMenu();

  const menuItems = [
    {
      name: "Home",
      index: "00."
    },
    {
      name: "Portfólio",
      index: "01."
    },
    {
      name: "Vamos Conversar?",
      index: "02."
    },
    {
      name: "+55 11 9 5199 1612",
      index: "03."
    }
  ];

  return (
    <>
      <Navbar>
        <Base.Container>
          <Navbar.Grid>
            <Logo />

            <Burguer>
              <Burguer.Button isActive={isActive} onClick={toggleMenu}>
                <Burguer.Content />
              </Burguer.Button>
            </Burguer>
          </Navbar.Grid>
        </Base.Container>
      </Navbar>

      <Menu isActive={isActive}>
        <Menu.Background />
        <Menu.Overlay />
        <Base.Container>
          <Menu.Content>
            <Base.Grid />

            <NavLinks>
              {menuItems.map((item) => {
                const isHovered = hovered === item.name;
                return (
                  <Link
                    activeClass="active"
                    to={item.name}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={700}
                    key={item.index}
                  >
                    <NavLinks.Item
                      index={item.index}
                      handleHoverStart={() => setHovered(item.name)}
                      handleHoverEnd={() => setHovered("")}
                      handleClick={toggleMenu}
                    >
                      {isHovered && <NavLinks.Hovered />}

                      {item.name}
                    </NavLinks.Item>
                  </Link>
                );
              })}
            </NavLinks>
          </Menu.Content>
        </Base.Container>
      </Menu>
    </>
  );
}
