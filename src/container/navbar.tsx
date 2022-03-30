import { useCallback, useState } from "react";
import { Link } from "react-scroll";

import { Base, BurguerButton, Logo, Menu, Navbar, NavLinks } from "components";

export default function NavbarContainer() {
  const [isActive, setIsActive] = useState(false);
  const [hovered, setHovered] = useState("");

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

  const handleClick = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

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
                      handleClick={handleClick}
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
